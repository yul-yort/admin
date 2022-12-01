import { UseFormReturn } from "react-hook-form";
import { ILocalityEntity } from "src/data/Locality/entity/types";
import { IOrderItemEntity } from "src/data/Order/entity/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";
import { IOrder } from "../types";

export interface ICreateOrders {
  showModal: boolean;
  handleCloseModal: () => void;
  titleModal: string;
  methods: UseFormReturn<IOrdersCreateFormFields>;
  createOrder: (fields: IDataCreateOrder) => void;
  handleOrderEdit: (fields: IOrderEditFormFields) => void;
  localities: ILocalityEntity[];
  getLocality: () => void;
  localitiesLoading: boolean;
  ordersAddLoading: boolean;
  selectedOrder: IOrderItemEntity | null;
  agencyID: number;
}

export interface IOrdersCreateModal {
  showModal: boolean;
  showConfirm: boolean;
  onClose: () => void;
  onSave: (fields: IOrdersCreateFormFields) => Promise<void>;
  onConformClose: () => void;
  onCancelClose: () => void;
  titleModal: string;
  localities: ILocalityEntity[];
  getLocality: () => void;
  localitiesLoading: boolean;
  ordersAddLoading: boolean;
  selectedOrder: IOrderItemEntity | null;
}

export type IOrdersCreateForm = Pick<
  IOrdersCreateModal,
  | "onSave"
  | "onClose"
  | "localities"
  | "getLocality"
  | "localitiesLoading"
  | "selectedOrder"
>;

export interface IOrdersCreateFormFields extends Pick<IOrder, "price"> {
  originId: Nullable<number>;
  destinationId: Nullable<number>;
}

export interface IOrderEditFormFields extends Pick<IOrder, "id" | "price"> {}
