"use client";

import { useEffect, useState } from "react";
import { getEventRevenue } from "@/service/event/eventManagement";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "../shared/Loader";

interface IRevenueData {
  eventId: string;
  eventName: string;
  totalRevenue: number;
  totalTransactions: number;
  totalParticipantsPaid: number;
}

const RevenueOverview = () => {
  const [data, setData] = useState<IRevenueData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRevenue = async () => {
    try {
      const res = await getEventRevenue();
      if (res.success) {
        // If backend sends one object, convert to array
        setData(Array.isArray(res.data) ? res.data : [res.data]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRevenue();
  }, []);

  if (loading) return <Loader />;
  if (!data.length) return <p>No revenue data available.</p>;

  return (
    <div className="space-y-6">
      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="eventName" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalRevenue" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <h1 className="text-2xl font-bold mb-4">Event Revenue Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((event) => (
          <Card key={event.eventId}>
            <CardHeader>
              <CardTitle>{event.eventName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p>Total Revenue: <span className="font-semibold">৳{event.totalRevenue}</span></p>
              <p>Total Transactions: <span className="font-semibold">{event.totalTransactions}</span></p>
              <p>Participants Paid: <span className="font-semibold">{event.totalParticipantsPaid}</span></p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RevenueOverview;
