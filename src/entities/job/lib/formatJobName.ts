export function formatJobName(name: string) {
  const fileExtension = ".txt";
  const formattedName = name.replace(/\s/g, "_").toUpperCase() + fileExtension;
  return formattedName;
}
