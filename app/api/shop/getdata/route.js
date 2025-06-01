
import dbConnect from "@/lib/mogobd";
import Shop from "@/model/shop";
import { NextResponse } from "next/server";
import product from "@/model/product";

export async function POST(request) {

  await dbConnect();
  const { slug } = await request.json();  

  const shop = await Shop.findById(slug);

  if (!shop) {
    return NextResponse.json({ message: "Shop not found" }, { status: 404 });
  }

const productIds = shop.product || [];



  let productData = [];
  for (let i = 0; i < productIds.length; i++) {
    const Product = await product.findById(productIds[i]);

    if (!Product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    productData.push({
      id: Product._id,
      name: Product.name,
      price: Product.price,
      category: Product.category,
      realPrice: Product.realPrice,
      rating: Product.rating,
    });
  }


  return NextResponse.json({
    shop: {
      name: shop.name,
      phone: shop.phone,
      address: shop.address,
      createdAt: shop.createdAt,
      email: shop.email,
      shop: productData,
    },
  });
}
