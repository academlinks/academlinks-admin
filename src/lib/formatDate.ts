const configs = {
  shortNumeric: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  } as const,
  verbal: {
    month: "short",
    year: "numeric",
    day: "numeric",
  } as const,
  long: {},
};

type ConfigT = "shortNumeric" | "verbal";

export default function formatDate(
  dateToFormat: Date | string,
  config: ConfigT = "shortNumeric"
): string | null {
  if (!dateToFormat || dateToFormat === "Invalid Date") return null;

  const date = new Date(dateToFormat);

  const formattedDate = new Intl.DateTimeFormat(
    "en-us",
    configs[config]
  ).format(date);

  return formattedDate.split("/").join("-");
}
