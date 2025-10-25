import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TodosList } from "@/components/TodosList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Completed = () => {
  return (
    <Table>
      <TableBody>
        <ErrorBoundary fallback={<div>Failed to load todos.</div>}>
          <Suspense fallback={<div>Loading todos...</div>}>
            <TodosList booleanCheck={true} />
          </Suspense>
        </ErrorBoundary>
      </TableBody>
    </Table>
  );
};

export default Completed;
