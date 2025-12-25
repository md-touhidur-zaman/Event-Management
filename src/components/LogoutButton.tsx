"use client";

import { logout } from "@/services/auth/logout";
import { Button } from "./ui/button";

export default function LogoutButton() {

    const handelLogout = async() =>{
        await logout()
    }
  return (
    <div>
      <Button onClick={handelLogout} className="text-sm cursor-pointer" variant="outline">
        Logout
      </Button>
    </div>
  );
}
