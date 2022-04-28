import { FC, useState, useEffect } from "react";
import { Paper } from "@mui/material";
import sharedCss from "../shared/styles.module.scss";
import { Routes } from "./Routes";
import { RoutesHeader } from "./RoutesHeader";
import { CreateRoutes } from "./CreateRoutes";
import { useForm } from "react-hook-form";
import { IRoutesCreateFormFields } from "./CreateRoutes/types";
import { IRoute } from "./types";

//TODO: сделать получение из mocks
//TODO: добавить получение валюты
const agencyRoutes = [
  {
    id: "1",
    origin: "Сибай",
    destination: "Уфа",
    price: 1000,
  },
  {
    id: "2",
    origin: "Акъяр",
    destination: "Уфа",
    price: 1000,
  },
  {
    id: "3",
    origin: "Бирск",
    destination: "Уфа",
    price: 1000,
  },
];

export const DetailRoutes: FC = () => {
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
    setTitleModal("Добавить новый маршрут");
    setRouteID("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditRouteClick = (id: string) => {
    setShowModal(true);
    changeDefaultValues(id);
    setTitleModal("Редактировать маршрут");
  };

  const handleDeleteRouteClick = (id: string) => {
    //TODO:  удаление агенства
    console.log(id);
  };

  const changeDefaultValues = (id: string) => {
    const route = agencyRoutes.find((item) => item.id === id);

    if (route) {
      const { id, origin, destination, price }: IRoute = route;
      setRouteID(id);
      setDefaultValues({
        origin,
        destination,
        price,
      });
    }
  };

  return (
    <Paper className={sharedCss.block} variant="outlined">
      <RoutesHeader handleCreateRouteClick={handleCreateRouteClick} />
      <Routes
        handleEditRouteClick={handleEditRouteClick}
        agencyRoutes={agencyRoutes}
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
