import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import { Toaster } from "sonner";
export function App() {
  return (
    <main className="w-full flex">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster richColors />
    </main>
  );
}

export default App;
