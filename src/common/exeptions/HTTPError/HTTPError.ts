class HTTPError extends Error {
  statusCode?: number;

  constructor(error: unknown) {
    if (error instanceof HTTPError) {
      super(error.message);
      this.statusCode = error.statusCode;
    }
  }
}

export { HTTPError };
