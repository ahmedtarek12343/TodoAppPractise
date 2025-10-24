import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { AppSidebar } from "@/components/AppSidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const MainLayout = () => {
  return (
    <SidebarProvider className="bg-muted ">
      <TooltipProvider delayDuration={500} disableHoverableContent>
        <AppSidebar />
        <SidebarInset className="m-3 rounded-2xl">
          <header className="flex items-center p-2 border-b">
            <SidebarTrigger className="mr-2 " />
            <h1 className="font-semibold text-lg">Todo List</h1>
          </header>
          <main className="flex-1 p-4 overflow-y-auto">
            <Outlet />
          </main>
        </SidebarInset>
      </TooltipProvider>
    </SidebarProvider>
  );
};

export default MainLayout;
