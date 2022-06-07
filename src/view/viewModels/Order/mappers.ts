import { IOrderItemEntity } from "src/data/entities/Order/types";

/**
 * Возвращает отфильтрованные поездки.
 *
 * @param orders - список поездок
 * @param filterByOrigin - пункт отбытия
 * @param filterByDestination - пункт прибытия
 * @param filterByAgency - название агенства
 * @param filterByPhone - телефон агенства
 */
export const filterOrders = (
  orders: IOrderItemEntity[],
  {
    filterByOrigin,
    filterByDestination,
    filterByAgency,
    filterByPhone,
  }: Record<string, string>
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
        ? order.agency.agencyName
            .toUpperCase()
            .includes(filterByAgency.toUpperCase())
        : true;
    })
    .filter((order) => {
      return filterByPhone
        ? order.agency.phones?.some((phone) => phone.includes(filterByPhone))
        : true;
    });
};
