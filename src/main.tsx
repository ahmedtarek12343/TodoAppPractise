import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./contexts/theme-provider.tsx";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";


const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <StrictMode>
          <App />
        </StrictMode>
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
