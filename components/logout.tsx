"use client";
import { Button } from "@chakra-ui/react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Logout() {

  const router = useRouter();
  const onLogout = async () => {
    try {
      deleteCookie("pb_auth");
      localStorage.clear();
      router.push("/auth/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Button className="btn-danger" onClick={onLogout}>
        Log out
      </Button>
    </div>
  );
}
