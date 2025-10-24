import { useGetTodos } from "@/hooks/useGetTodos";
import { TableRow, TableCell } from "./ui/table";
import { Button } from "./ui/button";
import { useRemoveTodo } from "@/hooks/useRemoveTodo";
import type { Todo } from "@/types/Todo";
import UpdateTodo from "./UpdateTodo";
import { useState } from "react";
export const TodosList = () => {
  const { data } = useGetTodos();
  const { mutate: remove } = useRemoveTodo();
  const handleDeleteClick = (id: string) => {
    remove(id);
  };

  const [open, onOpenChange] = useState(false);
  return (
    <>
      {data.length !== 0 ? (
        data?.map((todo: Todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell className="text-right flex gap-2 justify-end">
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() => {
                  onOpenChange(true);
                }}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                className="cursor-pointer"
                onClick={() => handleDeleteClick(todo.id)}
              >
                Remove
              </Button>
            </TableCell>
            <UpdateTodo open={open} onOpenChange={onOpenChange} todo={todo} />
          </TableRow>
        ))
      ) : (
        <p className="mt-5 text-2xl font-bold text-foreground">
          No todos Found
        </p>
      )}
    </>
  );
};
