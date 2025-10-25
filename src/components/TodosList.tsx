import { useGetTodos } from "@/hooks/useGetTodos";
import { TableRow, TableCell } from "./ui/table";
import { Button } from "./ui/button";
import { useRemoveTodo } from "@/hooks/useRemoveTodo";
import type { Todo } from "@/types/Todo";
import UpdateTodo from "./UpdateTodo";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { AlertWindow } from "./AlertWindow";
import { Trash2Icon, Edit2Icon } from "lucide-react";
export const TodosList = ({ booleanCheck }: { booleanCheck: boolean }) => {
  const { data } = useGetTodos();
  const { mutate: remove } = useRemoveTodo();
  const [editedTodo, setEditedTodo] = useState<Todo | null>(null);
  const [deletedTodo, setDeletedTodo] = useState<Todo | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const handleDeleteClick = (id: string) => {
    remove(id);
  };
  const filteredData = data.filter(
    (todo: Todo) => todo.completed === booleanCheck
  );
  const { mutate: update } = useUpdateTodo();
  return (
    <>
      {filteredData.length !== 0 ? (
        filteredData?.map((todo: Todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell className="text-right flex gap-2 justify-end items-center">
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() => {
                  setEditedTodo(todo);
                }}
              >
                <Edit2Icon />
              </Button>
              <Button
                variant="destructive"
                className="cursor-pointer"
                onClick={() => {
                  setShowWarning(true);
                  setDeletedTodo(todo);
                }}
              >
                <Trash2Icon />
              </Button>
              <Switch
                className="ml-5"
                onCheckedChange={(checked) => {
                  update({ ...todo, completed: checked });
                }}
                checked={todo.completed}
              />
            </TableCell>
          </TableRow>
        ))
      ) : (
        <p className="mt-5 text-2xl font-bold text-foreground">
          No todos Found
        </p>
      )}

      {editedTodo && (
        <UpdateTodo
          open={Boolean(editedTodo)}
          onOpenChange={(open) => {
            if (!open) {
              setEditedTodo(null);
            }
          }}
          todo={editedTodo}
        />
      )}
      {showWarning && (
        <AlertWindow
          open={showWarning}
          onOpenChange={setShowWarning}
          handleDeleteClick={handleDeleteClick}
          deletedTodoId={deletedTodo?.id!}
        />
      )}
    </>
  );
};
