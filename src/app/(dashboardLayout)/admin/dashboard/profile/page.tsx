import UserProfileClient from "@/components/modules/user/UpdateUserClient";
import { getMe } from "@/service/user/user";


export default async function ProfilePage() {
  const res = await getMe();

  if (!res.success) {
    return <p className="text-center">Failed to load profile</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      <UserProfileClient user={res.data} />
    </div>
  );
}
