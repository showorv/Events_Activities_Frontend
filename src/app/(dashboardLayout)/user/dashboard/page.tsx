
import { getMe } from "@/service/user/user"; 


export default async function UserDashboardPage() {
  // fetch user data
  const res = await getMe();
  const user = res.success ? res.data : null;

  return (
    <div className="p-6 bg-gray-50 flex flex-col items-center">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Welcome, {user?.name || "User"}!
        </h1>
        <p className="text-gray-600 mt-2 text-lg">Explore your dashboard</p>
      </div>

     
    </div>
  );
}
