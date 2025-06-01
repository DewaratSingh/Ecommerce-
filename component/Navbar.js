"use client";
import React from "react";
import { MdHome } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IoCartSharp } from "react-icons/io5";


const Navbar = ({liked, cart=false}) => {
const router = useRouter();

const handelaccount = () => {
    router.push("/pages/profile");  
}

const handelCart = () => {
    router.push("/pages/Cart");  
}

const handelLike = () => {
    router.push("/pages/Liked");    
}

  return (
    <div className="flex justify-between items-center  px-0 sm:px-7 bg-amber-300 w-full h-16 text-3xl text-black ">
      <div className="flex gap-1.5 justify-center items-center text-4xl">
        <FaOpencart />
       <div className="fascinate-inline-regular ">Meshow</div>
      </div>
      <div className="flex gap-1.5 justify-center items-center bg-yellow-400 rounded-full px-2 py-1">
        <input type="text" placeholder="Search" className="text-2xl border-none outline-none bg-transparent" />
        <div className="border-l-white">
          <CiSearch />
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        {liked ?<FaHeart onClick={handelLike}/>:<FaRegHeart onClick={handelLike}/>}
        {cart?<IoCartSharp onClick={handelCart} />:<IoCartOutline onClick={handelCart }/>}
        <CgProfile  onClick={handelaccount}/>
      </div>
    </div>
  );
};

export default Navbar;
