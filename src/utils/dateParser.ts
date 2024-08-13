import { formatDistanceToNow } from "date-fns";

const { ptBR } = require("date-fns/locale");

export function getDistanceToDate(isoString: string) {
  const date = new Date(isoString);
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
}
