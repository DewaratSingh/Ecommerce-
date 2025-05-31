"use client"
import React from 'react'
import { useRef } from 'react';
import { LuEyeClosed } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { signIn } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function page() {
    const password = useRef(null)
const handelPassword=()=>{
    if (password.current.type=="text") {
        password.current.type="password"
    } else {
        password.current.type="text"
    }
}

const router=useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault(); 
   console.log("submit");
    const form = e.target;
    let data = {
      email: form.email.value,
      password: form.password.value,
    };

    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res.ok) router.push("/");
    else alert("Login failed");
  
  };

  return (
    <div>
      <div className="m-auto w-[100%] max-w-[500px]">
        <h1 className="text-5xl">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="h-[50px] w-full  mt-5 border "
            type="text"
            name="email"
            placeholder="email"
            required
          />
          <div className="flex justify-between items-center w-full">
            <input
              ref={password}
              className="h-[50px] w-full  mt-5 border "
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <div className='h-[50px] text-2xl flex items-center mt-5 border' onClick={handelPassword}>
              <MdOutlineRemoveRedEye />
            </div>
          </div>
          <br />
          <input className=" border pl-5 pr-5 pt-3 pb-3 bg-pink-600" type="submit" value="Submit" />
        </form>
        <br /><br /><br />
      </div>

      <div className='text-blue-700 text-center'>
        Not having account?{" "}
        <Link href="/pages/login" className="underline">
          Create it.
        </Link>
      </div>
    </div>
  );
}
