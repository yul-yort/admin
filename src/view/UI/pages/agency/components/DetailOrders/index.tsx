import { FC, useState, useEffect } from "react";
import { Paper } from "@mui/material";
import sharedCss from "../shared/styles.module.scss";
import { Routes } from "./Routes";
import { RoutesHeader } from "./RoutesHeader";
import { CreateRoutes } from "./CreateRoutes";
import { useForm } from "react-hook-form";
import { IRoutesCreateFormFields } from "./CreateRoutes/types";
import { IDetailOrders } from "./types";

export const DetailOrders: FC<IDetailOrders> = ({ agencyOrders }) => {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [defaultValues, setDefaultValues] =
    useState<IRoutesCreateFormFields | null>(null);
  const [routeID, setRouteID] = useState("");

  const methods = useForm<IRoutesCreateFormFields>({});
  const { setValue } = methods;

  useEffect(() => {
    if (defaultValues) {
      setValue("origin", defaultValues.origin);
      setValue("destination", defaultValues.destination);
      setValue("price", defaultValues.price);
    }
  }, [defaultValues, setValue]);

  const handleCreateRouteClick = () => {
    setShowModal(true);
    setDefaultValues(null);
    setTitleModal("Добавить новую поездку");
    setRouteID("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditRouteClick = (id: string) => {
    setShowModal(true);
    changeDefaultValues(id);
    setTitleModal("Редактировать поездку");
  };

  const handleDeleteRouteClick = (id: string) => {
    //TODO:  удаление агенства
    console.log(id);
  };

  const changeDefaultValues = (id: string) => {
    const route = agencyOrders.find((item) => item.id === id);

    if (route) {
      setRouteID(route.id);
      setDefaultValues({
        origin: route.route.origin.name,
        destination: route.route.destination.name,
        price: route.price ? route.price : 0,
      });
      //FIXME: что выводить если цена не указана
    }
  };

  return (
    <Paper className={sharedCss.block} variant="outlined">
      <RoutesHeader handleCreateRouteClick={handleCreateRouteClick} />
      <Routes
        handleEditRouteClick={handleEditRouteClick}
        agencyOrders={agencyOrders}
        handleDeleteRouteClick={handleDeleteRouteClick}
      />
      <CreateRoutes
        routeID={routeID}
        methods={methods}
        titleModal={titleModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </Paper>
  );
};
