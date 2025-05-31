"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Navbar from "@/component/Navbar";
import axios from "axios";

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
    <div>
      <Navbar />
      <h1>Welcome to profile, {session?.user?.name}</h1>
      <p>Email: {Data?.email}</p>
      <p>Phone: {Data?.phone}</p>
      <p>Address: {Data?.address}</p>
      <p>Created At: {Data?.createdAt ? (Data.createdAt["$date"] || Data.createdAt) : ""}</p>
      <p>{Data?.shop ? ( <div onClick={() => router.push(`/pages/Dashboard/${Data.shop}`)} className="border pl-5 pr-5 pt-3 pb-3 ml-4 bg-pink-600 inline-block">
       Go to your shop 
      </div> ):""}</p> 
      <br /><br /><br />
      <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
  Logout
</button>

    </div>
  );
}
