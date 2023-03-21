import { IStoreViewModels } from "../../../store/types";
import { useStore } from "./useStore";

/**
 * Возвращает запрошенную ViewModel из хранилища.
 *
 * @param {keyof IStoreViewModels} key - ключ ViewModel-и в хранилище.
 */
export const useViewModel = <T extends keyof IStoreViewModels>(key: T) => {
  const store = useStore();

  return store[key];
};
