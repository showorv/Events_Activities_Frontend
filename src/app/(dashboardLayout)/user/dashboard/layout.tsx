import { ReactNode } from "react";
export const dynamic = "force-dynamic"

interface UserDashboardLayoutProps {
  children: ReactNode;
}

export default function UserDashboardLayout({
  children,
}: UserDashboardLayoutProps) {
  return <div>{children}</div>;
}
