import { UseFormReturn } from "react-hook-form";
import { ILocalityEntity } from "src/data/entities/Locality/types";
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
}

export interface IOrdersCreateForm
  extends Pick<
    IOrdersCreateModal,
    "onSave" | "onClose" | "localities" | "getLocality"
  > {}

export interface IOrdersCreateFormFields
  extends Pick<IOrder, "origin" | "destination" | "price"> {}
