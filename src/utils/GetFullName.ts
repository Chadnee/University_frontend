type TName =
  | {
      firstName?: string;
      middleName?: string;
      lastName?: string;
    }
  | string
  | null
  | undefined;

type NameOptions = {
  onlyFirstName?: boolean;
  onlyFirstAndMiddleName?: boolean;
};

export const getFullName = (
  name: TName,
  options?: NameOptions
): string => {
  if (!name) return "";

  /* If backend already sends string (Admin) */
  if (typeof name === "string") {
    if (options?.onlyFirstName) {
      return name.split(" ")[0] ?? "";
    }

    if (options?.onlyFirstAndMiddleName) {
      return name.split(" ").slice(0, 2).join(" ");
    }

    return name;
  }

  const { firstName, middleName, lastName } = name;

  /* Only first name */
  if (options?.onlyFirstName) {
    return firstName ?? "";
  }

  /* Only first + middle name */
  if (options?.onlyFirstAndMiddleName) {
    return [firstName, middleName]
      .filter((part): part is string => Boolean(part?.trim()))
      .join(" ");
  }

  /* Full name (default) */
  return [firstName, middleName, lastName]
    .filter((part): part is string => Boolean(part?.trim()))
    .join(" ");
};
