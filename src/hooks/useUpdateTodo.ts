import { useMutation } from "@tanstack/react-query";
import type { Todo } from "@/types/Todo";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (todo: Todo) => {
      const response = await fetch(
        `https://68feb56a7c700772bb1450d3.mockapi.io/Todo/${todo.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        }
      );
      const data = await response.json();
      return data;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      toast.success("Todo updated successfully");
    },
  });
};
