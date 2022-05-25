import { FC, useState, useEffect } from "react";
import { Paper } from "@mui/material";
import sharedCss from "../shared/styles.module.scss";
import { Orders } from "./Orders";
import { OrdersHeader } from "./OrdersHeader";
import { CreateOrder } from "./CreateOrder";
import { useForm } from "react-hook-form";
import { IOrdersCreateFormFields } from "./CreateOrder/types";
import { IDetailOrders } from "./types";
import Loading from "../../../../components/common/Loading";

export const DetailOrders: FC<IDetailOrders> = ({
  agencyOrders,
  deleteOrder,
  ordersLoading,
  createOrder,
  localities,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [defaultValues, setDefaultValues] =
    useState<IOrdersCreateFormFields | null>(null);
  const [orderID, setOrderID] = useState("");

  const methods = useForm<IOrdersCreateFormFields>({});
  const { setValue } = methods;

  useEffect(() => {
    if (defaultValues) {
      setValue("origin", defaultValues.origin);
      setValue("destination", defaultValues.destination);
      setValue("price", defaultValues.price);
    }
  }, [defaultValues, setValue]);

  const handleCreateOrderClick = () => {
    setShowModal(true);
    setDefaultValues(null);
    setTitleModal("Добавить новую поездку");
    setOrderID("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditOrderClick = (id: string) => {
    setShowModal(true);
    changeDefaultValues(id);
    setTitleModal("Редактировать поездку");
  };

  const handleDeleteOrderClick = async (id: string) => {
    await deleteOrder(id);
  };

  const changeDefaultValues = (id: string) => {
    const order = agencyOrders.find((item) => item.id === id);

    if (order) {
      setOrderID(order.id);
      setDefaultValues({
        origin: order.route.origin.name,
        destination: order.route.destination.name,
        price: order.price,
      });
    }
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
        orderID={orderID}
        methods={methods}
        titleModal={titleModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        createOrder={createOrder}
        localities={localities || []}
      />
    </Paper>
  );
};
