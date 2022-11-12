import { IOrderItemEntity } from "../../../data/Order/entity/types";

/**
 * Возвращает отфильтрованные поездки.
 *
 * @param orders - список поездок
 * @param filterByOrigin - пункт отбытия
 * @param filterByDestination - пункт прибытия
 * @param filterByAgency - название агентства
 * @param filterByPhone - телефон агентства
 */
export const filterOrders = (
  orders: IOrderItemEntity[],
  {
    filterByOrigin,
    filterByDestination,
    filterByAgency,
    filterByPhone,
  }: Record<string, number | string>
): IOrderItemEntity[] => {
  return orders
    .filter((order) => {
      return filterByOrigin ? order.route.origin.id === filterByOrigin : true;
    })
    .filter((order) => {
      return filterByDestination
        ? order.route.destination.id === filterByDestination
        : true;
    })
    .filter((order) => {
      return filterByAgency
        ? order.agency.name
            .toUpperCase()
            .trim()
            .includes(filterByAgency.toString().toUpperCase().trim())
        : true;
    })
    .filter((order) => {
      return filterByPhone
        ? order.agency.phones?.some((phone) =>
            phone.includes(filterByPhone.toString().trim())
          )
        : true;
    });
};
