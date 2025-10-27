import { queryOptions } from "@tanstack/react-query";

export const getTodosQueryOptions = () =>
  queryOptions({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://68feb56a7c700772bb1450d3.mockapi.io/Todo"
      );
      const data = await response.json();
      return data;
    },
  });

export const getTodosByIdQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["todos", id],
    queryFn: async () => {
      const response = await fetch(
        `https://68feb56a7c700772bb1450d3.mockapi.io/Todo/${id}`
      );
      const data = await response.json();
      return data;
    },
  });
