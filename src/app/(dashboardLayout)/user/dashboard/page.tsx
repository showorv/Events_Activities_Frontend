import { getMe } from "@/service/user/user"; 

export default async function UserDashboardPage() {
 
  const res = await getMe();
  const user = res.success ? res.data : null;

  return (
    <div className="min-h-screen p-6 bg-background flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome, {user?.name || "User"}!
        </h1>

        <p className="mt-2 text-lg text-muted-foreground">
          Explore your dashboard
        </p>
      </div>
    </div>
  );
}
