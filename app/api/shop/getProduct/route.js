import dbConnect from "@/lib/mogobd";
import product from "@/model/product";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { productIds } = await request.json();

  await dbConnect();
  let productData = [];
  for (let i = 0; i < productIds.length; i++) {
    const Product = await product.findById(productIds[i]);

    if (!Product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    productData.push({
      name: Product.name,
      price: Product.price,
      category: Product.category,
      realPrice: Product.realPrice,
      rating: Product.rating,
    });
  }

  return NextResponse.json({
    products: productData,
  });
}