import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoutes, UserRole } from "./auth-utils";

const getCommonSideBarItems = (role:UserRole): NavSection[] =>{
    const defaultDashboard = getDefaultDashboardRoutes(role)
    return [
        {
            title: "Dashboard",
            items: [
                {
                    title: "Dashboard Home",
                    url: defaultDashboard
                },
                {
                    title: "",
                    url: "/my-profile"
                }
            ]
        
        }

    ]
}

const getUserSideBarItems: NavSection[] = [
    {
        title: "Management",
        items: [
            {
                title: "My-Events",
                url: "/My-Events/:id"
            }
        ]
    }
]
const getAdminSideBarItems: NavSection[] = [
    {
        title: "Management",
        items: [
            {
                title: "All Users",
                url: "/admin/dashboard/all-users"
            },
            {
                title: "All Events",
                url: "/admin/dashboard/all-events"
            },
        ]
    }
]
const getHostSideBarItems: NavSection[] = [
    {
        title: "Management",
        items: [
            {
                title: "Create Event",
                url: "/host/dashboard/create-event"
            },
            {
                title: "All Events",
                url: "/host/dashboard/all-events"
            },
        ]
    }
]


export const getSidebarItemsByRole = (role: UserRole): NavSection[] =>{
    const commonSidebarItems = getCommonSideBarItems(role)
    
    switch(role){
        case "USER":
            return [...commonSidebarItems,...getUserSideBarItems]
        case "HOST":
            return [...commonSidebarItems, ...getHostSideBarItems]
        case "ADMIN":
            return [...commonSidebarItems, ...getAdminSideBarItems]
        default:
            return []
    }

}
