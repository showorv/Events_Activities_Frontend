// import BecomeHostClient from "@/components/modules/user/BecomeHost";
// import { Suspense } from "react";


// export default function BecomeHostPage() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Become a Host</h1>
//     <Suspense fallback={null}>

//       <BecomeHostClient />
//     </Suspense>
//     </div>
//   );
// }

import BecomeHostClient from "@/components/modules/user/BecomeHost";
import { becomeHost } from "@/service/user/user";
import { Suspense } from "react";

export default function BecomeHostPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Become a Host</h1>
      
    <Suspense fallback={null}>
    <BecomeHostClient onBecomeHost={becomeHost} />
    </Suspense>
     
    </div>
  );
}
