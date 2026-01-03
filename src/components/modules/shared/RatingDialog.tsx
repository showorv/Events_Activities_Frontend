"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { toast } from "sonner";
import { rateHost } from "@/service/rate/rate";

interface Props {
  open: boolean;
  onClose: () => void;
  hostId: string;
  eventId: string;
  onSuccess?: () => void;
}

export default function HostRatingDialog({ open, onClose, hostId, eventId, onSuccess }: Props) {
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleRate = async () => {
    if (stars < 1 || stars > 5) return toast.error("Please select 1-5 stars");
    setLoading(true);
    const res = await rateHost({ hostId, eventId, stars });
    setLoading(false);

    if (res.success) {
      toast.success("Host rated successfully!");
      onSuccess?.();
      onClose();
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Rate Your Host</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4 mt-2">
          <div className="flex gap-2 text-3xl">
            {[1, 2, 3, 4, 5].map((s) => (
              <span
                key={s}
                className={`cursor-pointer ${stars >= s ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setStars(s)}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Click to select rating</p>
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleRate} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
