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
    <div className="flex justify-evenly items-center bg-pink-600 w-full h-11 text-3xl text-white">
      <div className="flex gap-1.5 justify-center items-center">
        <FaOpencart />
        <div>Meshow</div>
      </div>
      <div className="flex gap-1.5 justify-center items-center border">
        <input type="text" placeholder="Search" className="text-2xl"/>
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
