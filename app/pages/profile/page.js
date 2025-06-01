"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Navbar from "@/component/Navbar";
import axios from "axios";
import { CgProfile } from "react-icons/cg";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [Data, setData] = useState({});
  const router = useRouter();

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get("/api/user/profile");
      setData(response.data.user);
      console.log("User profile data:", response.data.user);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/pages/signin");
    }
    fetchUserProfile();
  }, [status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
        {status === "unauthenticated"? "":(
    <div>
      {/* <Navbar /> */}
      <div className="flex items-center justify-center w-full text-9xl">
        <CgProfile />
      </div>
      <div className="flex items-center justify-center w-full text-space-x-4 ">
        <div className="m-auto bg-amber-100 ">
          <p className="h-[50%]">Welcome, {session?.user?.name}</p>
          <p className="h-[50%]">Email: {Data?.email}</p>
          <p className="h-[50%]">Phone: {Data?.phone}</p>
          <p className="h-[50%]">Address: {Data?.address}</p>
          <p className="h-[50%]">
            Created At:{" "}
            {Data?.createdAt ? Data.createdAt["$date"] || Data.createdAt : ""}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-evenly w-full text-space-x-4 ">
      <p className="h-[50%]">
        {Data?.shop ? (
          <div
            onClick={() => router.push(`/pages/Dashboard/${Data.shop}`)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Go to your shop
          </div>
        ) : (
          ""
        )}
      </p>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button></div>
    </div>)}
    </>
  );
}
