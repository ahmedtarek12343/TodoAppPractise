import { useSuspenseQuery } from "@tanstack/react-query";
import { getTodosByIdQueryOptions } from "@/api/QueryOptions";
export const useGetById = (id: string) => {
  return useSuspenseQuery(getTodosByIdQueryOptions(id));
};
