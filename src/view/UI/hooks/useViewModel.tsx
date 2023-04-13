import { IViewModelsContainer } from "../../../containers";
import { useStore } from "./useStore";

/**
 * Возвращает запрошенную ViewModel из хранилища.
 *
 * @param {keyof IViewModelsContainer} key - ключ ViewModel-и в хранилище.
 */
export const useViewModel = <T extends keyof IViewModelsContainer>(key: T) => {
  const store = useStore();

  return store[key];
};
