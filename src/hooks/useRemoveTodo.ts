import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      fetch(`https://68feb56a7c700772bb1450d3.mockapi.io/Todo/${id}`, {
        method: "DELETE",
      }),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Todo deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
