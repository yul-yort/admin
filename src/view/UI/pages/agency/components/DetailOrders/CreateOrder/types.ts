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
  handleOrderEdit: (fields: IOrdersCreateFormFields) => void;
  localities: ILocalityEntity[];
  getLocality: () => void;
  localitiesLoading: boolean;
  ordersAddLoading: boolean;
  defaultValues: IOrdersEditFormDefaultFields | null;
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
  orderID: string;
  defaultValues: IOrdersEditFormDefaultFields | null;
}

export interface IOrdersCreateForm
  extends Pick<
    IOrdersCreateModal,
    | "onSave"
    | "onClose"
    | "localities"
    | "getLocality"
    | "localitiesLoading"
    | "orderID"
    | "defaultValues"
  > {}

export interface IOrdersCreateFormFields
  extends Pick<IOrder, "origin" | "destination" | "price"> {
  orderID?: string;
}

export interface IOrdersEditFormDefaultFields
  extends Pick<IOrder, "origin" | "destination" | "price"> {
  originID: string;
  destinationID: string;
}
