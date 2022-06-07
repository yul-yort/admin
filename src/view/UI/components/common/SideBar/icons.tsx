import { ReactNode } from "react";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import LuggageRoundedIcon from "@mui/icons-material/LuggageRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const icons: Record<string, ReactNode> = {
  dashboard: <BarChartRoundedIcon />,
  agencies: <FormatListBulletedRoundedIcon />,
  orders: <LuggageRoundedIcon />,
  localities: <LocationOnIcon />,
};
