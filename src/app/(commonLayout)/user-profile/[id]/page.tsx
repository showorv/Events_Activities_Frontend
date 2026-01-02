
import UserDetailsClient from "@/components/modules/shared/UserDetails";

import { getSingleUser } from "@/service/user/user";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const UserPage = async ({ params }: PageProps) => {
  const { id } = await params; 

  const res = await getSingleUser(id);
  console.log(res);
  

  return (
    <div className="max-w-7xl mx-auto mt-20">
  <UserDetailsClient user={res.data} />
  </div>
  );
};

export default UserPage;
