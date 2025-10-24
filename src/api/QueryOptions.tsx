import { queryOptions } from "@tanstack/react-query";

export const getTodosQueryOptions = () =>
  queryOptions({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://68fa2b24ef8b2e621e7f0afa.mockapi.io/Todo"
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
        `https://68fa2b24ef8b2e621e7f0afa.mockapi.io/Todo/${id}`
      );
      const data = await response.json();
      return data;
    },
  });
