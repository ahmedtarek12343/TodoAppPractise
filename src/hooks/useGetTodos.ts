import { getTodosQueryOptions } from "@/api/QueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetTodos = () => {
  return useSuspenseQuery(getTodosQueryOptions());
};
