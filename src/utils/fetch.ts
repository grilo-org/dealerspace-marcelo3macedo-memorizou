import { ParsedUrlQuery } from "querystring";

import { ParsedParams } from "./props/fetch";

export function parseQueryParams(query: ParsedUrlQuery): ParsedParams {
  const page =
    typeof query.page === "string" ? parseInt(query.page, 10) || 1 : 1;
  const limit =
    typeof query.limit === "string" ? parseInt(query.limit, 10) || 10 : 10;
  return { page, limit };
}
