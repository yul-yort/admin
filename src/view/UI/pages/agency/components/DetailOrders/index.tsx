import { FC, useState, useEffect } from "react";
import { Paper } from "@mui/material";
import sharedCss from "../shared/styles.module.scss";
import { Orders } from "./Orders";
import { OrdersHeader } from "./OrdersHeader";
import { CreateOrder } from "./CreateOrder";
import { useForm } from "react-hook-form";
import {
  IOrdersCreateFormFields,
  IOrderEditFormFields,
} from "./CreateOrder/types";
import { IDetailOrders } from "./types";
import Loading from "../../../../components/common/Loading";
import { IOrderItemEntity } from "../../../../../../data/Order/entity/types";

export const DetailOrders: FC<IDetailOrders> = ({
  agencyID,
  agencyOrders,
  deleteOrder,
  ordersLoading,
  createOrder,
  localities,
  getLocality,
  localitiesLoading,
  ordersAddLoading,
  editOrder,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [selectedOrder, setSelectedOrder] =
    useState<Nullable<IOrderItemEntity>>(null);

  const methods = useForm<IOrdersCreateFormFields>({});
  const { setValue } = methods;

  useEffect(() => {
    if (selectedOrder) {
      setValue("price", selectedOrder.price);
    }
  }, [selectedOrder, setValue]);

  const handleCreateOrderClick = () => {
    setShowModal(true);
    setSelectedOrder(null);
    setTitleModal("Добавить новую поездку");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditOrderClick = (id: string) => {
    setShowModal(true);
    changeDefaultValues(id);
    setTitleModal("Редактировать поездку");
  };

  const handleDeleteOrderClick = async (id: number) => {
    await deleteOrder(id);
  };

  const changeDefaultValues = (id: string) => {
    const order = agencyOrders.find((item) => item.id.toString() === id);

    if (order) {
      setSelectedOrder(order);
    }
  };

  const handleOrderEdit = async (fields: IOrderEditFormFields) => {
    await editOrder(fields);
  };

  return (
    <Paper className={sharedCss.block} variant="outlined">
      <OrdersHeader
        handleCreateOrder={handleCreateOrderClick}
        ordersLoading={ordersLoading}
      />
      {!ordersLoading ? (
        <Orders
          handleEditOrder={handleEditOrderClick}
          agencyOrders={agencyOrders}
          handleDeleteOrder={handleDeleteOrderClick}
        />
      ) : (
        <Loading />
      )}
      <CreateOrder
        methods={methods}
        titleModal={titleModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        createOrder={createOrder}
        localities={localities || []}
        getLocality={getLocality}
        localitiesLoading={localitiesLoading}
        ordersAddLoading={ordersAddLoading}
        selectedOrder={selectedOrder}
        handleOrderEdit={handleOrderEdit}
        agencyID={agencyID}
      />
    </Paper>
  );
};
