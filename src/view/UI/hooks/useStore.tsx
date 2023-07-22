import { IViewModelsContainer } from "../../../containers";
import { useRouter } from "react-router5";

/**
 * Возвращает хранилище целиком.
 */
export const useStore = (): IViewModelsContainer => {
  return useRouter().getDependencies().store;
};
