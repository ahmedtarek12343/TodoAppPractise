import { Check, Home, Inbox, Plus } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import NewTodo from "./NewTodo";
import { useEffect, useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
];

export function AppSidebar() {
  const [isActive, setIsActive] = useState("");
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsActive(location.pathname);
  }, [location.pathname]);
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="mb-2">
                <SidebarMenuButton
                  variant="outline"
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() => setIsOpen(true)}
                >
                  <Plus />
                  <span>New Todo</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActive === item.url}
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <NewTodo open={isOpen} onOpenChange={setIsOpen} />
    </Sidebar>
  );
}
