import { IAgencyResponseDTO } from "../../../data/entities/Agency/types";

export const agencies: IAgencyResponseDTO[] = [
  {
    id: "123444",
    agencyPhones: ["9999999999", "0000000000"],
    createDate: new Date(1).toString(),
    editedDate: new Date().toString(),
    description:
      "О-о о-о, зеленоглазое такси, о-о о-о, притормози, притормози \n" +
      "О-о о-о, ты отвези меня туда, о-о о-о, где будут рады мне всегда, всегда, да, да.",
    agencyName: "Зеленоглазое такси",
  },
];
