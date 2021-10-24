import { IStoreViewModels } from "../../../store/types";
import { useRouter } from "react-router5";

/**
 * Возвращает хранилище целиком.
 */
export const useStore = (): IStoreViewModels => {
  return useRouter().getDependencies().store;
};
