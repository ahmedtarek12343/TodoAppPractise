import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import React, { useState } from "react";
import type { Todo } from "@/types/Todo";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { toast } from "sonner";
interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  todo: Todo;
}
const UpdateTodo = ({ open, onOpenChange, todo }: Props) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const { mutate } = useUpdateTodo();
  const handleSubmit = () => {
    if (!newTodo.trim()) {
      toast.error("Todo name is required");
      return;
    }
    console.log(newTodo);

    onOpenChange(false);
    const addedTodo: Todo = {
      id: todo.id,
      title: newTodo,
      completed: false,
    };
    mutate(addedTodo);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What's the updated name of your todo</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Input
            placeholder="Todo name"
            defaultValue={todo.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTodo(e.target.value)
            }
          />
        </DialogDescription>
        <div className="flex justify-end mt-2 gap-2">
          <Button variant={"outline"} onClick={handleSubmit}>
            Update
          </Button>
          <Button variant={"destructive"} onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodo;
