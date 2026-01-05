import { ReactNode } from "react";
export const dynamic = "force-dynamic"

interface AdminDashboardLayoutProps {
  children: ReactNode;
}

export default function AdminDashboardLayout({
  children,
}: AdminDashboardLayoutProps) {
  return <div>{children}</div>;
}
