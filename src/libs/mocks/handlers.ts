import { localitiesHandlers, ordersHandlers, userHandlers } from "./data";

export const handlers = [
  ...userHandlers,
  ...ordersHandlers,
  ...localitiesHandlers,
];
