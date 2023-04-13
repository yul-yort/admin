import fetchMock from "jest-fetch-mock";
import Fetcher from "../fetcher";
import { EEndpoints } from "../../../common";
import { IFetcherConfig } from "../types";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

describe("fetcher", () => {
  const config: IFetcherConfig = {
    credentials: "include",
    headers: {
      "Content-Type": "text/html",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  const baseUrl = "https://www.test.ru";
  const endpoint = "test" as EEndpoints;
  const responseBody = { data: "12345" };

  const getFetcher = () => new Fetcher(baseUrl, config);
  let fetcher = getFetcher();

  beforeEach(() => {
    fetcher = getFetcher();
    fetchMock.mockResponseOnce(JSON.stringify(responseBody));
  });

  afterEach(() => {
    fetcher.destroy();
    fetchMock.resetMocks();
  });

  describe("data", () => {
    it("should call fetch method", async () => {
      await fetcher.get(endpoint);

      expect(fetchMock).toBeCalledTimes(1);
    });

    it("should call fetch method with correct base url", async () => {
      await fetcher.get(endpoint);

      expect(fetchMock.mock.calls[0][0]).toMatch(baseUrl);
    });

    it("should call fetch method with correct endpoint", async () => {
      await fetcher.get(endpoint);

      expect(fetchMock.mock.calls[0][0]).toMatch(endpoint);
    });

    it("should call fetch method with correct query params", async () => {
      await fetcher.get(endpoint, { query: { test: "test" } });

      expect(fetchMock.mock.calls[0][0]).toMatch("?test=test");
    });

    it("should call fetch method with correct body", async () => {
      const body = { test: "test" };
      await fetcher.post(endpoint, { body });

      expect(fetchMock.mock.calls[0][1]).toStrictEqual({
        body: JSON.stringify(body),
        ...config,
        method: "POST",
      });
    });

    it("should call fetch method with correct config", async () => {
      await fetcher.get(endpoint);

      expect(fetchMock.mock.calls[0][1]).toStrictEqual({
        ...config,
        method: "GET",
      });
    });

    it("should throw error if call fetch method with error response", async () => {
      fetchMock.resetMocks();
      const error = new Response("Not Found", {
        status: 404,
        statusText: "Not Found",
      });

      fetchMock.mockRejectOnce(Error(await error.text()));

      await expect(async () => {
        await fetcher.get(endpoint);
      }).rejects.toThrow("Not Found");
    });
  });

  describe("hooks", () => {
    it("should call error hook", async () => {
      fetchMock.resetMocks();
      const errorHook = jest.fn();

      try {
        const error = new Response("Not Found", {
          status: 404,
          statusText: "Not Found",
        });

        fetchMock.mockRejectOnce(Error(await error.text()));
        fetcher.useErrorHook(errorHook);

        await expect(async () => {
          await fetcher.get("/endpoint" as EEndpoints);
        }).rejects.toThrow("Not Found");
      } catch (error) {
        expect(errorHook).toBeCalledTimes(1);
        expect(errorHook).toBeCalledWith({
          error: new Error("Not Found"),
          url: `${baseUrl}/${endpoint}`,
        });
      }
    });

    it("should call response hook", async () => {
      const responseHook = jest.fn();
      fetcher.useResponseHook(responseHook);

      await fetcher.get(endpoint);

      expect(responseHook).toBeCalledTimes(1);
      expect(responseHook).toBeCalledWith({
        response: responseBody,
        url: `${baseUrl}/${endpoint}`,
      });
    });
  });

  describe("destroy", () => {
    it("should call with destroyed params", async () => {
      fetcher.destroy();
      await fetcher.get(endpoint);

      expect(fetchMock.mock.calls[0][0]).toStrictEqual(`${endpoint}`);
      expect(fetchMock.mock.calls[0][1]).toStrictEqual({
        method: "GET",
      });
    });
  });

  describe("get method", () => {
    it("should make request with method GET", async () => {
      await fetcher.get(endpoint);

      expect(fetchMock.mock.calls[0][1]).toStrictEqual({
        method: "GET",
        ...config,
      });
    });
  });

  describe("post method", () => {
    it("should make request with method POST", async () => {
      await fetcher.post(endpoint);

      expect(fetchMock.mock.calls[0][1]).toStrictEqual({
        method: "POST",
        ...config,
      });
    });
  });

  describe("delete method", () => {
    it("should make request with method DELETE", async () => {
      await fetcher.delete(endpoint);

      expect(fetchMock.mock.calls[0][1]).toStrictEqual({
        method: "DELETE",
        ...config,
      });
    });
  });

  describe("patch method", () => {
    it("should make request with method patch", async () => {
      await fetcher.patch(endpoint);

      expect(fetchMock.mock.calls[0][1]).toStrictEqual({
        method: "PATCH",
        ...config,
      });
    });
  });
});
