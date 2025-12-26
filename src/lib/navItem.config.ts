""
import { UserRole, getDefaultDashboardRoute } from "@/types/authTypeProxy";
import { NavSection } from "@/types/dashboard.interface";


export const getCommonNavItems = (role: UserRole): NavSection[] => {
    const defaultDashboard = getDefaultDashboardRoute(role);

    return [
        {
            items: [
                {
                    title: "Dashboard",
                    href: defaultDashboard,
                    icon: "LayoutDashboard",
                    roles: ["ADMIN", "SUPERADMIN", "USER", "HOST"],
                },
                {
                    title: "My Profile",
                    href: `/profile`,
                    icon: "User",
                    roles: ["ADMIN", "SUPERADMIN", "USER", "HOST"],
                },

            ]
        },
        {
            title: "Settings",
            items: [
                {
                    title: "Change Password",
                    href: "/change-password",
                    icon: "Settings", // ✅ String
                    roles: ["ADMIN", "SUPERADMIN", "USER", "HOST"],
                },
            ],
        },
    ]
}

export const hostNavItems: NavSection[] = [
    {
        title: "Event Management",
        items: [
            {
                title: "All Events",
                href: "/host/dashboard/all-events",
                icon: "ChartColumnDecreasing", // ✅ String
                badge: "3",
                roles: ["HOST"],
            },
            {
                title: "Create Events",
                href: "/host/dashboard/create-events",
                icon: "Plus", // ✅ String
                roles: ["HOST"],
            },
            {
                title: "Event Participants",
                href: "/host/dashboard/event-participants",
                icon: "PersonStanding", // ✅ String
                roles: ["HOST"],
            },
            {
                title: "Revenue",
                href: "/host/dashboard/revenue",
                icon: "HandCoins", // ✅ String
                roles: ["HOST"],
            },
        ],
    }
]

export const userNavItems: NavSection[] = [
    {
        title: "Events Record",
        items: [
            {
                title: "Event Details",
                href: "/user/dashboard/all-event",
                icon: "ChartColumnDecreasing", // ✅ String
                roles: ["USER"],
            },
            {
                title: "Joined Event",
                href: "/user/dashboard/join-event",
                icon: "ListChevronsUpDown", // ✅ String
                roles: ["USER"],
            },
        ],
    },
    // {
    //     title: "Medical Records",
    //     items: [
    //         {
    //             title: "My Prescriptions",
    //             href: "/dashboard/my-prescriptions",
    //             icon: "FileText", // ✅ String
    //             roles: ["PATIENT"],
    //         },
    //         {
    //             title: "Health Records",
    //             href: "/dashboard/health-records",
    //             icon: "Activity", // ✅ String
    //             roles: ["PATIENT"],
    //         },
    //     ],
    // },

]

export const adminNavItems: NavSection[] = [
    {
        title: "Manage Eventify",
        items: [
            {
                title: "Events",
                href: "/admin/dashboard/manage-events",
                icon: "ChartColumnDecreasing", // ✅ String
                roles: ["ADMIN","SUPERADMIN"],
            },
            {
                title: "Users",
                href: "/admin/dashboard/manage-users",
                icon: "Users", // ✅ String
                roles: ["ADMIN","SUPERADMIN"],
            },
            {
                title: "Hosts",
                href: "/admin/dashboard/manage-hosts",
                icon: "Users", // ✅ String
                roles: ["ADMIN","SUPERADMIN"],
            },
        ],
    },

]

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
    const commonNavItems = getCommonNavItems(role);

    switch (role) {
        case "ADMIN":
            return [...commonNavItems, ...adminNavItems];
        case "SUPERADMIN":
            return [...commonNavItems, ...adminNavItems];
        case "USER":
            return [...commonNavItems, ...userNavItems];
        case "HOST":
            return [...commonNavItems, ...hostNavItems];
        default:
            return [];
    }
}