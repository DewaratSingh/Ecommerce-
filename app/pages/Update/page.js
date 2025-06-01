"use client";
import React from 'react'
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function page() {

    const { data: session, status } = useSession();
  
    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/pages/signin");
      }
    }, [status]);
  
    if (status === "loading") {
      return <p>Loading...</p>;
    }
  return (
     <div>
  
          <div className="m-auto w-[100%] max-w-[500px]">
            <h1 className="text-5xl">Update Product</h1>
            <form action="">
              <input
                className="h-[50px] w-full  mt-5 border "
                type="text"
                name="name"
                placeholder="name"
                required
              />
             
              <input
                className="h-[50px] w-full  mt-5 border "
                type="text"
                name="price"
                placeholder="price"
                required
              />
                <input
                className="h-[50px] w-full  mt-5 border "
                type="text"
                name="realPrice"
                placeholder="Real Price"
                required
              />
              <input
                className="h-[50px] w-full  mt-5 border "
                type="text"
                name="Description"
                placeholder="Description"
                required
              />
              <input
                className="h-[50px] w-full  mt-5 border "
                type="text"
                name="category"
                placeholder="Category"
                required
              />
              
              <input
                className="h-[50px] w-full  mt-5 border "
                type="file"
                name="file"
                placeholder="Upload Images of Product"
                required
              />Upload Images of Product
              <br />
              <input className=" border pl-5 pr-5 pt-3 pb-3 bg-pink-600" type="button" value="Submit" />
            </form>
            <br /><br /><br />
          </div>
        </div>
  )
}
