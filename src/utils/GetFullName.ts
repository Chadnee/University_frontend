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
};

export const getFullName = (
  name: TName,
  options?: NameOptions
): string => {
  if (!name) return "";

  // if backend already sends string (Admin)
  if (typeof name === "string") {
    // If only first name is requested
    if (options?.onlyFirstName) {
      return name.split(" ")[0] ?? "";
    }
    return name;
  }

  // name is object (Student / Faculty)
  if (options?.onlyFirstName) {
    return name.firstName ?? "";
  }

  return [name.firstName, name.middleName, name.lastName]
    .filter(Boolean)
    .join(" ");
};
