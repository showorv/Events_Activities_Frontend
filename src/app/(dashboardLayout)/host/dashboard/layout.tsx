import React from "react";
export const dynamic = "force-dynamic"

const HostDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default HostDashboardLayout;