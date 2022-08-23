import { agencyHandlers, ordersHandlers, userHandlers } from "./data";

export const handlers = [...agencyHandlers, ...userHandlers, ...ordersHandlers];
