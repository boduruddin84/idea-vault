"use client";

import { UpdateProfileModal } from "@/components/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <Card className="flex flex-col items-center border w-80 my-5 mx-auto">
      <Avatar className="h-20 w-20">
        <Avatar.Image
          alt={user?.name}
          src={user?.image}
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <h3 className="text-2xl font-semibold">{user?.name}</h3>
      <p className="text-muted">{user?.email}</p>
      <UpdateProfileModal />
    </Card>
  );
};

export default ProfilePage;