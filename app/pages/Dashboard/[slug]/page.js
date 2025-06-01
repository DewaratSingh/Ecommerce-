"use client";
import React, { use } from "react";
import { useSession, signIn } from "next-auth/react";
import { useEffect,useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";


export default function page() {
  const router = useRouter();
  const { slug } = useParams();
  const [Data, setData] = useState({});
  const [products, setProducts] = useState([]);

  const { data: session, status } = useSession();

  const fetchUserProfile = async () => {
    try {
      const response = await axios.post("/api/shop/getdata", { slug: slug });
      setData(response.data.shop);
      setProducts(response.data.shop.shop || []);
      console.log("User profile data:", response.data.shop);
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
      <h1>Shop Details</h1>
      <p>Name: {Data?.name}</p>
      <p>Phone: {Data?.phone}</p>
      <p>Address: {Data?.address}</p>
      <p>Email: {Data?.email}</p>
      <p>Created At: {Data?.createdAt ? (Data.createdAt["$date"] || Data.createdAt) : ""}</p>
      <div className="inline-block">
        <div className="flex w-[800px] bg-pink-600">
          <div className="w-[200px] border-l-2 text-center overflow-x-clip">
            Name
          </div>
          <div className="w-[200px] border-l-2 text-center overflow-x-clip">
            Category
          </div>
          <div className="w-[200px] border-l-2 text-center overflow-x-clip">
            Price
          </div>
          <div className="w-[200px] border-l-2 text-center overflow-x-clip">
            Rating
          </div>
          <div className="w-[200px] border-l-2 text-center overflow-x-clip">
            Edit
          </div>
          <div className="w-[200px] border-l-2 text-center overflow-x-clip">
            Delete
          </div>
        </div>

        {products.map((item, index) => (
          <div key={index} className="flex w-[800px] bg-pink-200">
            <div className="w-[200px] border-l-2 text-center overflow-x-clip">
              {item.name}
            </div>
            <div className="w-[200px] border-l-2 text-center overflow-x-clip">
              {item.category}
            </div>
            <div className="w-[200px] border-l-2 text-center overflow-x-clip">
              {item.price}
            </div>
            <div className="w-[200px] border-l-2 text-center overflow-x-clip">
              {item.rating}
            </div>
            <div className="w-[200px] border-l-2 text-center overflow-x-clip">
              Edit
            </div>
            <div className="w-[200px] border-l-2 text-center overflow-x-clip">
              Delete
            </div>
          </div>
        ))}

      </div>

      <div onClick={() => router.push(`/pages/addProduct/${slug}`)} className="border pl-5 pr-5 pt-3 pb-3 ml-4 bg-pink-600 inline-block">
        + Add Product
      </div>
    </div>
  );
}
