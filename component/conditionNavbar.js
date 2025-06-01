"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/component/Navbar";    

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // List of routes where navbar should be hidden
  const hiddenRoutes = ["/pages/signin", "/pages/login"];

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}
