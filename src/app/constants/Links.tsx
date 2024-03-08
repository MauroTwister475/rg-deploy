import { LayoutDashboard, PlusCircle, LayoutList } from "lucide-react";

export const NAVBAR_LINKS = [
  { 
    href: "/dashboard",
    text: "Dashboard",
    icon: <LayoutDashboard />,
  },

  { 
    href: "/new_relatory",
    text: "Adicionar",
    icon: <PlusCircle />,
  },

  { 
    href: "/view_relatories",
    text: "Relatórios",
    icon:  <LayoutList />,
  },
];