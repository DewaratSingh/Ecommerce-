"use client"
import Image from "next/image";
import Navbar from "@/component/Navbar";
import Banner from "@/component/Banner";
import Item from "@/component/Item";
import { useState } from "react";

export default function Home() {
  const [Data, setData] = useState(
    [
  {
    price: 487,
    name: "Saree",
    imgSrc: "https://picsum.photos/400/300?random=101"
  },
  {
    price: 1299,
    name: "Leather Jacket",
    imgSrc: "https://picsum.photos/400/300?random=102"
  },
  {
    price: 699,
    name: "Sneakers",
    imgSrc: "https://picsum.photos/400/300?random=103"
  },
  {
    price: 299,
    name: "T-Shirt",
    imgSrc: "https://picsum.photos/400/300?random=104"
  },
  {
    price: 899,
    name: "Wrist Watch",
    imgSrc: "https://picsum.photos/400/300?random=105"
  },
  {
    price: 1099,
    name: "Handbag",
    imgSrc: "https://picsum.photos/400/300?random=106"
  },
  {
    price: 349,
    name: "Sunglasses",
    imgSrc: "https://picsum.photos/400/300?random=107"
  },
  {
    price: 499,
    name: "Jeans",
    imgSrc: "https://picsum.photos/400/300?random=108"
  },
  {
    price: 2299,
    name: "Smartphone",
    imgSrc: "https://picsum.photos/400/300?random=109 "
  },
  {
    price: 149,
    name: "Cap",
    imgSrc: "https://picsum.photos/400/300?random=110"
  }
]
)





  return (
    <div className="w-full ">
      {/* <Navbar liked={false}/> */}
      <Banner/>
     <div className="w-full bg-amber-300 p-3 text-black flex gap-2 items-center ">
      <div className="h-[8px] w-[8px] bg-amber-400 rounded-full"></div>
     <div> Product</div>
      </div>
     <div className="m-auto text-center">
      {
        Data.map((ele,i)=>{
          return(
<Item key={i}
price={ele.price} name={ele.name} imgSrc={ele.imgSrc} isLiked={true}/>
          )
        })
      }

     </div>
    </div>
  );
}
