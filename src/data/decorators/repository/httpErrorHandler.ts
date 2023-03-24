import { IApi, IMethodArgs } from "../../../libs/api/types";
import { CONSTANTS, HTTPRequestError } from "../../../common";
import { BaseRepository } from "../../BaseRepository";

/**
 * При ошибке авторизации (401) удаляет данные пользователя
 * из localStorage и делает переход на страницу авторизации.
 */
export function httpErrorHandler(): MethodDecorator {
  return (
    target: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;

    descriptor.value = async function <T, Q = void>(
      this: BaseRepository,
      ...args: [method: keyof IApi, args: IMethodArgs<Q>]
    ) {
      try {
        return await original.apply(this, args);
      } catch (err) {
        if (err instanceof HTTPRequestError && err.statusCode === 401) {
          const routerState = this.router.getState();

          localStorage.removeItem(CONSTANTS.publicAdminInfoKey);
          this.router.navigate("login", {
            redirectName: routerState.name,
            redirectParams: JSON.stringify(routerState.params),
          });
        }

        throw err;
      }
    };
  };
}
