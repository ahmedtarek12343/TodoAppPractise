import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import { Toaster } from "sonner";
export function App() {
  return (
    <main className="w-full flex">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/completed" element={<Completed />} />
        </Route>
      </Routes>
      <Toaster richColors />
    </main>
  );
}

export default App;
