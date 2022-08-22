import { ILocalityEntity } from "src/data/Locality/entity";

/**
 * Filter localities by search value.
 *
 * @param localities - localities
 * @param searchValue - search value
 */
export const filterLocalities = (
  localities: ILocalityEntity[],
  searchValue: string
): ILocalityEntity[] => {
  const trimmedSearchValue = searchValue.toLocaleLowerCase().trim();

  return localities.filter(
    (locality) =>
      locality.name.toLocaleLowerCase().trim().includes(searchValue.trim()) ||
      locality.region
        ?.toLocaleLowerCase()
        .trim()
        .includes(trimmedSearchValue) ||
      locality.description
        ?.toLocaleLowerCase()
        .trim()
        .includes(trimmedSearchValue) ||
      locality.district
        ?.toLocaleLowerCase()
        .trim()
        .includes(trimmedSearchValue) ||
      locality.coordinates?.toString().trim().includes(trimmedSearchValue)
  );
};
