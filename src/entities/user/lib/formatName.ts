export function formatName(firstName: string | null, lastName: string | null) {
  const firstNameInitial = firstName?.split("")[0];
  const lastNameInitial = lastName?.split("")[0];

  return `${firstNameInitial?.toUpperCase()}${lastNameInitial?.toUpperCase()}`;
}
