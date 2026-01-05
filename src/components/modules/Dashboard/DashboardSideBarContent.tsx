"use client";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { GetIconComponents } from "@/lib/icon-mapper";
import { NavSection } from "@/types/dashboard.interface";
import Link from "next/link";

interface NavItemsProps {
  data: {
    navMain: NavSection[];
  };
}

export default function DashboardSideBarContent({ data }: NavItemsProps) {
  return (
    <SidebarMenu className="space-y-5">
      {data.navMain.map((item) => (
        <SidebarMenuItem key={item.title}>
          <h1 className="text-[#DC143C] font-bold">{item.title}</h1>

          {item.items?.length ? (
            <SidebarMenuSub className="space-y-2">
              {item.items.map((item) => {
                const Icon = GetIconComponents(item.icon);
                return (
                  <SidebarMenuSubItem key={item.title}>
                   
                      <Link
                        className="flex  items-center gap-2 text-sm"
                        href={item.url}
                      >
                        {" "}
                        <Icon size={20} /> {item.title}
                      </Link>
                    
                  </SidebarMenuSubItem>
                );
              })}
            </SidebarMenuSub>
          ) : null}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
