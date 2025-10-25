import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import React, { useState } from "react";
import type { Todo } from "@/types/Todo";
import { useAddTodo } from "@/hooks/useAddTodo";
import { toast } from "sonner";
interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const NewTodo = ({ open, onOpenChange }: Props) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const { mutate } = useAddTodo();
  const handleSubmit = () => {
    if (!newTodo.trim()) {
      toast.error("Todo name is required");
      return;
    }
    onOpenChange(false);
    const addedTodo: Omit<Todo, "id"> = {
      title: newTodo,
      completed: false,
    };
    mutate(addedTodo);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What's the name of your todo</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Input
            placeholder="Todo name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTodo(e.target.value)
            }
          />
        </DialogDescription>
        <div className="flex justify-end mt-2 gap-2">
          <Button variant={"outline"} onClick={handleSubmit}>
            Add
          </Button>
          <Button variant={"destructive"} onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewTodo;
