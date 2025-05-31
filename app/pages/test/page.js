"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return <h1>Welcome {session?.user?.name}</h1>;
}