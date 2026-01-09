"use client";

import { changePassword } from "@/service/user/user";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

export default function ChangePasswordFormClient() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      // setMessage({ type: "error", text: "All fields are required" });
      toast.error("All fields are required")
      return;
    }

    if (newPassword !== confirmPassword) {
      // setMessage({ type: "error", text: "New password and confirm password do not match" });
      toast.error("New password and confirm password do not match")
      return;
    }

    try {
      setLoading(true);
   

      // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/change-password`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   credentials: "include",
      //   body: JSON.stringify({ oldPassword, newPassword }),
      // });
      // const res = await serverFetch.post(`/auth/change-password`,{
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ oldPassword, newPassword })
      // })

      const data = await changePassword(oldPassword,newPassword)
      console.log("change password",data);
      
     

      // setMessage({ type: data.success ? "success" : "error", text: data.message });

      if (data.success) {
        toast.success(data.message);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err: any) {
      toast.error(  err.message || "Something went wrong" );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="max-w-md mx-auto bg-card p-6 rounded-xl border border-border shadow-sm space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-foreground mb-4">Change Password</h2>

 

      <div>
        <label className="block mb-1 font-medium text-foreground">Old Password</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="Enter old password"
          className="w-full bg-background border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-foreground">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          className="w-full bg-background border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-foreground">Confirm New Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          className="w-full bg-background border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition disabled:opacity-60"
      >
        {loading ? "Changing..." : "Change Password"}
      </button>
    </form>
  );
}
