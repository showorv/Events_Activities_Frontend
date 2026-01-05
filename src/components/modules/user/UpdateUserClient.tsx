"use client";

import { updateUser } from "@/service/user/user";
import { useState } from "react";
import { toast } from "sonner";

interface User {
  _id: string;
  name: string;
  email: string;
  location?: string;
  interests?: string[];
  bio?: string;
  profileImage?: string;
}

export default function UserProfileClient({ user }: { user: User }) {
  const [form, setForm] = useState(user);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(
    user.profileImage || null
  );
  const [loading, setLoading] = useState(false);

  /* ---------------- handlers ---------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInterests = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      interests: e.target.value.split(",").map((i) => i.trim()),
    });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ---------------- submit ---------------- */
  const handleUpdate = async () => {
    setLoading(true);

    const fd = new FormData();
    fd.append(
      "data",
      JSON.stringify({
        name: form.name || undefined,
        email: form.email || undefined,
        location: form.location || undefined,
        bio: form.bio || undefined,
        interests: form.interests?.length ? form.interests : undefined,
      })
    );

    if (imageFile) {
      fd.append("file", imageFile);
    }

    const res = await updateUser(form._id, fd);
    setLoading(false);

    if (res.success) {
      toast.success(res.message || "Profile updated");
    } else {
      toast.error(res.message || "Update failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-card p-6 rounded-xl border border-border shadow-sm space-y-6">
      {/* Profile Image */}
      <div className="flex items-center gap-6">
        <img
          src={preview || "/avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border border-border"
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="text-sm text-muted-foreground"
          />
        </div>
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Email
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Location
        </label>
        <input
          name="location"
          value={form.location || ""}
          onChange={handleChange}
          placeholder="Dhaka, Bangladesh"
          className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Interests */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Interests
        </label>
        <input
          value={form.interests?.join(", ") || ""}
          onChange={handleInterests}
          placeholder="Tech, Fitness, Travel"
          className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Separate interests with commas
        </p>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Bio
        </label>
        <textarea
          name="bio"
          value={form.bio || ""}
          onChange={handleChange}
          placeholder="Write something about yourself..."
          rows={4}
          className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Update Button */}
      <button
        onClick={handleUpdate}
        disabled={loading}
        className="w-full bg-primary text-primary-foreground py-2 rounded-lg
                   hover:opacity-90 transition disabled:opacity-60"
      >
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </div>
  );
}
