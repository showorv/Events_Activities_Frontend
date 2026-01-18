"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const HelpSupport = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-sidebar-border rounded-2xl shadow-sm border p-6 sm:p-8 text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground dark:text-foreground ">Need Help or Support?</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          If you face any issues or have questions about your account, events, or payments,
          feel free to contact our admin team. We usually reply within 24 hours.
        </p>

        <p className="text-sm text-gray-500">
          📧 Email:{" "}
          <span className="font-medium text-gray-700">
            yousufshowrov101@gmail.com
          </span>
        </p>

        <Link href="/contact">
          <Button className="w-full sm:w-auto mt-2">Contact Support</Button>
        </Link>
      </div>
    </div>
  );
};

export default HelpSupport;
