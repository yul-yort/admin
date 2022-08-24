import { ordersHandlers, userHandlers } from "./data";

export const handlers = [...userHandlers, ...ordersHandlers];
