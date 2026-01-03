"use client";

import { getHostRatings } from "@/service/rate/rate";
import { useEffect, useState } from "react";


interface IUser {
  _id: string;
  name: string;
  email: string;
}

interface IEvent {
  _id: string;
  name: string;
  date: string;
}

interface IRating {
  _id: string;
  user: IUser;
  event: IEvent | null;
  stars: number;
  createdAt: string;
}

interface HostRatingsData {
  totalRatings: number;
  averageRating: number;
  ratings: IRating[];
}

export default function HostRatingsTable() {
  const [data, setData] = useState<HostRatingsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRatings = async () => {
      setLoading(true);
      const res = await getHostRatings();
      if (res.success) {
        setData(res.data);
      } else {
        console.error(res.message);
      }
      setLoading(false);
    };

    fetchRatings();
  }, []);

  if (loading) return <p>Loading ratings...</p>;
  if (!data) return <p>No ratings found.</p>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Ratings</h2>
        <p className="text-muted-foreground">
          Average Rating: ⭐ {data.averageRating.toFixed(1)} ({data.totalRatings} ratings)
        </p>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Event</th>
              <th className="p-3 text-center">Rating</th>
              <th className="p-3 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.ratings.map((r) => (
              <tr key={r._id} className="border-t">
                <td className="p-3">{r.user.name}</td>
                <td className="p-3">{r.user.email}</td>
                <td className="p-3">{r.event ? r.event.name : "N/A"}</td>
                <td className="p-3 text-center">⭐ {r.stars}</td>
                <td className="p-3 text-center">{new Date(r.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
