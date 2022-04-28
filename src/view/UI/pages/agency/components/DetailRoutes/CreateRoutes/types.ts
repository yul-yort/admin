import { UseFormReturn } from "react-hook-form";
import { IRoute } from "..//types";

export interface ICreateRoutes {
  showModal: boolean;
  handleCloseModal: () => void;
  titleModal: string;
  methods: UseFormReturn<IRoutesCreateFormFields>;
  routeID: string;
}

//FIXME: исправить any
export interface IRoutesCreateModal {
  showModal: boolean;
  showConfirm: boolean;
  onClose: () => void;
  onSave: (a: IRoutesCreateFormFields) => Promise<void>;
  onConformClose: () => void;
  onCancelClose: () => void;
  titleModal: string;
}

export interface IRoutesCreateForm
  extends Pick<IRoutesCreateModal, "onSave" | "onClose"> {}

export interface IRoutesCreateFormFields
  extends Pick<IRoute, "origin" | "destination" | "price"> {}
