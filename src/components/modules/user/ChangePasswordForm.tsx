"use client";

import { useState, FormEvent } from "react";
import { toast } from "sonner";

export default function ChangePasswordFormClient() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      setMessage({ type: "error", text: "All fields are required" });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", text: "New password and confirm password do not match" });
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      // Call your backend API directly
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await res.json();

      setMessage({ type: data.success ? "success" : "error", text: data.message });

      if (data.success) {
        toast.success(data.message);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>

      {message && (
        <div className={`p-2 rounded text-white ${message.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {message.text}
        </div>
      )}

      <div>
        <label className="block mb-1 font-medium">Old Password</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter old password"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter new password"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Confirm New Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Confirm new password"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-chart-5 text-white py-2 rounded-lg transition disabled:opacity-60"
      >
        {loading ? "Changing..." : "Change Password"}
      </button>
    </form>
  );
}
