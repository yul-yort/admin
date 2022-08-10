import { UseFormReturn } from "react-hook-form";
import { ILocalityEntity } from "src/data/Locality/entity/types";
import { IOrderItemEntity } from "src/data/Order/entity/types";
import { IOrder } from "../types";

export interface ICreateOrders {
  showModal: boolean;
  handleCloseModal: () => void;
  titleModal: string;
  methods: UseFormReturn<IOrdersCreateFormFields>;
  createOrder: (fields: IOrdersCreateFormFields) => void;
  handleOrderEdit: (fields: IOrdersEditSelected) => void;
  localities: ILocalityEntity[];
  getLocality: () => void;
  localitiesLoading: boolean;
  ordersAddLoading: boolean;
  selectedOrder: IOrdersEditSelected | null;
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
  selectedOrder: IOrdersEditSelected | null;
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

export type IOrdersCreateFormFields = Pick<
  IOrder,
  "origin" | "destination" | "price"
>;

export type IOrdersEditSelected = Pick<
  IOrderItemEntity,
  "route" | "price" | "id"
>;
