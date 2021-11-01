import { IAgencyResponseDTO } from "../../../data/domainModels/Agency/types";

export const agencies: IAgencyResponseDTO[] = [
  {
    id: "123444",
    agencyPhones: ["9999999999", "0000000000"],
    createDate: new Date(1),
    editedDate: new Date(),
    description:
      "Ехал Грека через реку.\n" +
      "Видит Грека в реке рак.\n" +
      "Сунул в реку руку Грека.\n" +
      "Рак за руку Греку - цап.",
    agencyName: "Туган як",
  },
];
