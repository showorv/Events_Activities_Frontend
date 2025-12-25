import { ReactNode } from "react";

interface UserDashboardLayoutProps {
  children: ReactNode;
}

export default function UserDashboardLayout({
  children,
}: UserDashboardLayoutProps) {
  return <div>{children}</div>;
}
