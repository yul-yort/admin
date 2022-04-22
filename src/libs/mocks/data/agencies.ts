import { IAgencyResponseDTO } from "../../../data/entities/Agency/types";

export const agencies: IAgencyResponseDTO[] = [
  {
    id: "1",
    phones: ["+79999999999", "80000000000"],
    createDate: new Date(1).toString(),
    editedDate: new Date().toString(),
    description:
      "О-о о-о, зеленоглазое такси, о-о о-о, притормози, притормози \n" +
      "О-о о-о, ты отвези меня туда, о-о о-о, где будут рады мне всегда, всегда, да, да.",
    agencyName: "Зеленоглазое такси",
  },
  {
    id: "2",
    agencyName: "Давай подвезём!",
    phones: [],
    createDate: new Date().toString(),
    editedDate: new Date().toString(),
  },
  {
    id: "3",
    agencyName: "По пути",
    phones: ["+79999999999"],
    createDate: new Date().toString(),
    editedDate: new Date().toString(),
    description: "Нам с Вами по пути!",
  },
];
