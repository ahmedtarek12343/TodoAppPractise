import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      fetch(`https://68fa2b24ef8b2e621e7f0afa.mockapi.io/Todo/${id}`, {
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
