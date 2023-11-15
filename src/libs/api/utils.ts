export const replacePlaceholders = (
  str: string,
  values: Record<string, string | number>
): string => {
  return str.replace(/:(\w+)/g, (_, placeholder) => {
    const value = values[placeholder];
    return value !== undefined ? String(value) : `:${placeholder}`;
  });
};
