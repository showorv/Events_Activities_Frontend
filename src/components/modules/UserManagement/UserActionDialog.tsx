"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IUser } from "@/types/user.interface";

import { toast } from "sonner";
import { useTransition } from "react";
import { toggleBlockUser, updateUser } from "@/service/user/user";

interface Props {
  open: boolean;
  onClose: () => void;
  user: IUser | null;
  onSuccess: () => void;
}

const UserActionDialog = ({ open, onClose, user, onSuccess }: Props) => {
  const [, startTransition] = useTransition();

  if (!user) return null;
  


  const handleRoleChange = async (role: string) => {
    const formData = new FormData();
    formData.append("role", role);
  
    const res = await updateUser(user._id!, formData);
    if (res.success) {
      toast.success(res.message ||"Role updated");
      startTransition(onSuccess);
      onClose();
    }
  };

  const handleBlockToggle = async () => {
    const res = await toggleBlockUser(user._id!, user.isBlocked);
  
    if (res.success) {
      toast.success(user.isBlocked ? "User unblocked" : "User blocked");
      startTransition(onSuccess);
      onClose();
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Management</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="font-medium">{user.name}</p>

          <div className="flex gap-2">
            <Button onClick={() => handleRoleChange("USER")}>User</Button>
            <Button onClick={() => handleRoleChange("HOST")}>Host</Button>
            <Button onClick={() => handleRoleChange("ADMIN")}>Admin</Button>
          </div>

          <Button
            variant={user.isBlocked ? "outline" : "destructive"}
            onClick={handleBlockToggle}
          >
            {user.isBlocked ? "Unblock User" : "Block User"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserActionDialog;
