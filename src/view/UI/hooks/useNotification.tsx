import { useStore } from "./useStore";
import { INotificationsVM } from "../../viewModels/types";

/**
 * Возвращает запрошенную методы для работы с уведомлениями из хранилища.
 */
export const useNotification = (): INotificationsVM =>
  useStore()["notifications"];
