"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

function page() {
  const [Radio, setRadio] = useState(false);
  const [Load, setLoad] = useState(false)
const router = useRouter();
  const handleRadio = (e) => {
    setRadio(e.target.checked);
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const form = e.target;
    let data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      password: form.password.value,
      Sname:"na",
      Saddress:"na",
      Semail:"na",
      Scontact:404
    };

    if (Radio) {
        data.Sname= form.Sname.value
        data.Saddress= form.Saddress.value
        data.Scontact= form.Scontact.value
        data.Semail= form.Semail.value
    }
setLoad(true)
    try {
      const res = await axios.post("/api/login", data);
      router.push("/pages/signin");
      setLoad(false)
      
    } catch (err) {
      setLoad(false)
      console.log(err);
    }
  };
 
  return (
    <div >
      {Load ? "loading.. " : (
      <div className="m-auto w-[100%] max-w-[500px]">
        <h1 className="text-5xl">New Registration</h1>
        <form  onSubmit={handleSubmit}>
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
            name="email"
            placeholder="email"
            required
          />
          <input
            className="h-[50px] w-full  mt-5 border "
            type="text"
            name="phone"
            placeholder="phone number"
            required
          />
          <input
            className="h-[50px] w-full  mt-5 border "
            type="text"
            name="address"
            placeholder="address"
            required
          />
          <input
            className="h-[50px] w-full  mt-5 border "
            type="text"
            name="password"
            placeholder="password"
            required
          />
          <input type="checkbox" onChange={handleRadio} />
          Do you want to open shop
          {Radio && (
            <div>
              <input
                className="h-[50px] w-full  mt-5 border "
                type="text"
                name="Sname"
                placeholder="shop name"
                required
              />
              <input
                className="h-[50px] w-full  mt-5 border "
                type="text"
                name="Saddress"
                placeholder="shop address"
                required
              />
              <input
                className="h-[50px] w-full  mt-5 border "
                type="text"
                name="Scontact"
                placeholder="contact"
                required
              />
              <input
                className="h-[50px] w-full  mt-5 border "
                type="text"
                name="Semail"
                placeholder="email"
                required
              />
            </div>
          )}
          <br />
          <input className="bg-red-500 text-white px-4 py-2 rounded" type="submit" value="Submit" />
        </form>
        <br /><br /><br />
        <div className='text-blue-700 text-center'>
        Already having account?{" "}
        <Link href="/pages/signin" className="underline">
          LogIn
        </Link>
      </div>
      </div>
      )}
    </div>
  );
}

export default page;
