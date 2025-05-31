"use client"
import Image from "next/image";
import Navbar from "@/component/Navbar";
import Banner from "@/component/Banner";
import Item from "@/component/Item";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [Data, setData] = useState(
    [
  {
    price: 487,
    name: "Saree",
    imgSrc: "https://source.unsplash.com/300x300/?saree&sig=1"
  },
  {
    price: 1299,
    name: "Leather Jacket",
    imgSrc: "https://source.unsplash.com/300x300/?jacket&sig=2"
  },
  {
    price: 699,
    name: "Sneakers",
    imgSrc: "https://source.unsplash.com/300x300/?sneakers&sig=3"
  },
  {
    price: 299,
    name: "T-Shirt",
    imgSrc: "https://source.unsplash.com/300x300/?tshirt&sig=4"
  },
  {
    price: 899,
    name: "Wrist Watch",
    imgSrc: "https://source.unsplash.com/300x300/?watch&sig=5"
  },
  {
    price: 1099,
    name: "Handbag",
    imgSrc: "https://source.unsplash.com/300x300/?handbag&sig=6"
  },
  {
    price: 349,
    name: "Sunglasses",
    imgSrc: "https://source.unsplash.com/300x300/?sunglasses&sig=7"
  },
  {
    price: 499,
    name: "Jeans",
    imgSrc: "https://source.unsplash.com/300x300/?jeans&sig=8"
  },
  {
    price: 2299,
    name: "Smartphone",
    imgSrc: "https://source.unsplash.com/300x300/?smartphone&sig=9"
  },
  {
    price: 149,
    name: "Cap",
    imgSrc: "https://source.unsplash.com/300x300/?cap&sig=10"
  }
]
)


  const { data: session, status } = useSession();
  const router = useRouter(); 

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/pages/signin");
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }


  return (
    <div className="w-full ">
      <Navbar liked={true} />
      

     <div className="m-auto text-center">
      {
        Data.map((ele,i)=>{
          return(
<Item key={i}
price={ele.price} name={ele.name} imgSrc={ele.imgSrc} isLiked={false}/>
          )
        })
      }

     </div>
    </div>
  );
}
