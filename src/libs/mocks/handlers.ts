import {
  agencyHandlers,
  localitiesHandlers,
  ordersHandlers,
  userHandlers,
} from "./data";

export const handlers = [
  ...agencyHandlers,
  ...userHandlers,
  ...ordersHandlers,
  ...localitiesHandlers,
];
