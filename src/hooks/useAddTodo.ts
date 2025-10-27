import { useMutation } from "@tanstack/react-query";
import type { Todo } from "@/types/Todo";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (todo: Omit<Todo, "id">) => {
      const response = await fetch(
        "https://68feb56a7c700772bb1450d3.mockapi.io/Todo",
        {
          method: "POST",
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
      toast.success("Todo added successfully");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
