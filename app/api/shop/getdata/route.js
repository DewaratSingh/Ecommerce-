import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import dbConnect from "@/lib/mogobd";
import Shop from "@/model/shop";
import { NextResponse } from "next/server";

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
    const { slug } = await request.json();  

  const shop = await Shop.findById(slug);

  
  if (!shop) {
    return NextResponse.json({ message: "Shop not found" }, { status: 404 });
  }

  return NextResponse.json({
    shop: {
      name:shop.name,
     phone: shop.phone,
      address: shop.address,
      createdAt: shop.createdAt,
      email: shop.email,
      shop: shop.product? shop.product : [],
    },
  });
}
