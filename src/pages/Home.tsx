import {
  Table,
  TableBody,
} from "@/components/ui/table";
import { TodosList } from "@/components/TodosList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Home = () => {
  return (
    <Table>
      <TableBody>
        <ErrorBoundary fallback={<div>Failed to load todos.</div>}>
          <Suspense fallback={<div>Loading todos...</div>}>
            <TodosList booleanCheck={false} />
          </Suspense>
        </ErrorBoundary>
      </TableBody>
    </Table>
  );
};

export default Home;
