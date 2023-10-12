"use client";
import { MenuItem } from "@chakra-ui/react";
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
      <MenuItem className="btn-danger" onClick={onLogout}>
        Sign Out
      </MenuItem>
  );
}
