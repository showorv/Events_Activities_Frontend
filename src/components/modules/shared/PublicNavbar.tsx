// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// import { getUserInfo } from "@/service/auth/getUserInfo";
// import { UserInfo } from "@/types/user.interface";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Events", href: "/events" },
//   { name: "Become Host", href: "/become-host" },
//   { name: "Dashboard", href: "/dashboard" },
// ];
// interface NavbarProps {
//   userInfo: UserInfo | null; // <-- define props here
// }

// export default function Navbar({userInfo}: NavbarProps) {
//   const [open, setOpen] = useState(false);

//   console.log(userInfo);
  

   
  

//   useEffect(() => {
    
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav className="w-full fixed top-0 left-0 z-50 bg-background/70 backdrop-blur-lg border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-2xl font-bold text-primary"
//         >
//           <Link href="/">Eventify</Link>
//         </motion.div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((link, i) => (
//             <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href={link.href}
//                 className="text-muted-foreground hover:text-foreground transition font-medium"
//               >
//                 {link.name}
//               </Link>
//             </motion.div>
//           ))}

//           <Link
//             href="/login"
//             className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
//           >
//             Login
//           </Link>
//         </div>

//         {/* Mobile Toggle Button */}
//         <button className="md:hidden text-foreground" onClick={() => setOpen(true)}>
//           <Menu size={28} />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 80 }}
//             className="fixed top-0 right-0 w-64 h-full bg-background border-l border-border shadow-lg z-50 p-6"
//           >
//             {/* Close Button */}
//             <button className="absolute top-4 right-4 text-foreground" onClick={() => setOpen(false)}>
//               <X size={28} />
//             </button>

//             <div className="flex flex-col gap-6 mt-14">
//               {navLinks.map((link, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.05 }}
//                 >
//                   <Link
//                     href={link.href}
//                     className="block text-lg font-medium text-foreground"
//                     onClick={() => setOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.25 }}
//               >
//                 <Link
//                   href="/login"
//                   className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center hover:opacity-90"
//                   onClick={() => setOpen(false)}
//                 >
//                   Login
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

import { UserInfo } from "@/types/user.interface";

interface NavbarProps {
  userInfo: UserInfo | null;
}

export default function Navbar({ userInfo }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  console.log(userInfo?.role);

  
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Determine dashboard link based on role
  const dashboardLink = userInfo
    ? userInfo.role === "USER"
      ? "/user/dashboard"
      : userInfo.role === "HOST"
      ? "/host/dashboard"
      : "/admin/dashboard"
    : null;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-background/70 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-primary"
        >
          <Link href="/">Eventify</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {dashboardLink && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={dashboardLink}
                className="text-muted-foreground hover:text-foreground transition font-medium"
              >
                Dashboard
              </Link>
            </motion.div>
          )}

          {!userInfo ? (
            <Link
              href="/login"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              {/* Profile Button */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-full border border-border px-2 py-1 hover:bg-accent/10 transition"
              >
                <Image
                  src={userInfo.profileImage || "/default-avatar.png"}
                  alt="avatar"
                  width={8}
                  height={8}
                  className="rounded-full"
                />
                <ChevronDown size={8} />
              </button>

              {/* Profile Dropdown */}
              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50 flex flex-col"
                  >
                    <Link
                      href="/profile"
                      className="px-4 py-2 hover:bg-accent/10 text-foreground"
                      onClick={() => setProfileOpen(false)}
                    >
                      Your Profile
                    </Link>
                    {userInfo.role === "USER" && (
                      <Link
                        href="/become-host"
                        className="px-4 py-2 hover:bg-accent/10 text-foreground"
                        onClick={() => setProfileOpen(false)}
                      >
                        Become Host
                      </Link>
                    )}
                    <button
                      className="px-4 py-2 text-foreground hover:bg-accent/10 text-left w-full"
                      onClick={() => {
                        localStorage.removeItem("token"); // logout logic
                        window.location.href = "/login";
                      }}
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 right-0 w-64 h-full bg-background border-l border-border shadow-lg z-50 p-6"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-foreground"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-6 mt-14">
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block text-lg font-medium text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {dashboardLink && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href={dashboardLink}
                    className="block text-lg font-medium text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>
                </motion.div>
              )}

              {!userInfo ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/login"
                    className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center hover:opacity-90"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Mobile Profile Dropdown */}
                  <div className="flex flex-col border-t border-border mt-4 pt-4 gap-2">
                    <Link
                      href="/profile"
                      className="px-4 py-2 hover:bg-accent/10 text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Your Profile
                    </Link>
                    {userInfo.role === "USER" && (
                      <Link
                        href="/become-host"
                        className="px-4 py-2 hover:bg-accent/10 text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        Become Host
                      </Link>
                    )}
                    <button
                      className="px-4 py-2 hover:bg-accent/10 text-foreground text-left w-full"
                      onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/login";
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
