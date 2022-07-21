import { UseFormReturn } from "react-hook-form";
import { ILocalityEntity } from "src/data/Locality/entity/types";
import { IOrder } from "../types";

export interface ICreateOrders {
  showModal: boolean;
  handleCloseModal: () => void;
  titleModal: string;
  methods: UseFormReturn<IOrdersCreateFormFields>;
  orderID: string;
  createOrder: (fields: IOrdersCreateFormFields) => void;
  localities: ILocalityEntity[];
  getLocality: () => void;
  localitiesLoading: boolean;
  ordersAddLoading: boolean;
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
}

export type IOrdersCreateForm = Pick<
  IOrdersCreateModal,
  "onSave" | "onClose" | "localities" | "getLocality" | "localitiesLoading"
>;

export type IOrdersCreateFormFields = Pick<
  IOrder,
  "origin" | "destination" | "price"
>;
