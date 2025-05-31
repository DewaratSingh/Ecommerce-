import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const Item = ({ price, name, imgSrc ,isLiked}) => {
  return (
    <div className="inline-block h-[300px] w-[250px] bg-[#8786865b] rounded-2xl overflow-hidden m-2 relative transition hover:scale-105">
      <div className="h-[250px] w-[250px] bg-[#8786865b] justify-center
        items-center flex">
         
        <img 
          width={250}
          height={250}
          src={imgSrc}
          alt={name}
          className="object-cover"
        />
      </div>
      <div className="text-left">
        <div>{name}</div>
        <div className="flex justify-center items-center">
          <span>{price}</span>
          <span>
            <FaIndianRupeeSign />
          </span>
        </div>
        <div className="text-2xl text-red-600 absolute top-3 right-3">
          {isLiked ? <FaHeart />: <FaRegHeart />}
         
        </div>
        <div className="text-2xl text-red-600 absolute top-3 right-3">
          {isLiked ? <FaHeart />: <FaRegHeart />}
         
        </div>
      </div>
    </div>
  );
};

export default Item;
