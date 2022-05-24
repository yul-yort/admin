import { UseFormReturn } from "react-hook-form";
import { IOrder } from "../types";

export interface ICreateOrders {
  showModal: boolean;
  handleCloseModal: () => void;
  titleModal: string;
  methods: UseFormReturn<IOrdersCreateFormFields>;
  orderID: string;
  createOrder: (fields: IOrdersCreateFormFields) => void;
}

export interface IOrdersCreateModal {
  showModal: boolean;
  showConfirm: boolean;
  onClose: () => void;
  onSave: (fields: IOrdersCreateFormFields) => Promise<void>;
  onConformClose: () => void;
  onCancelClose: () => void;
  titleModal: string;
}

export interface IOrdersCreateForm
  extends Pick<IOrdersCreateModal, "onSave" | "onClose"> {}

export interface IOrdersCreateFormFields
  extends Pick<IOrder, "origin" | "destination" | "price"> {}

export interface IOrderOptionPoint {
  inputValue?: string;
  name: string;
  id: string;
}
