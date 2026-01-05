import { getMe } from "@/service/user/user";

export default async function UserDashboardPage() {
  // fetch user data
  const res = await getMe();
  const user = res.success ? res.data : null;

  return (
    <div className="p-6 bg-background text-foreground flex flex-col items-center min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Welcome, {user?.name || "User"}!
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore your dashboard
        </p>
      </div>

     
    </div>
  );
}
