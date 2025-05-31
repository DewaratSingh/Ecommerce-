import mongoose from "mongoose";
import User from "@/model/resister";
import Shop from "@/model/shop";
import dbConnect from "@/lib/mogobd";
import bcrypt from "bcryptjs";
export async function POST(request) {
  let {
    name,
    email,
    phone,
    address,
    Sname,
    Saddress,
    Scontact,
    Semail,
    password,
  } = await request.json();

  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return Response.json({ message: "User already exists", submited: false });
  }

  let shop = null;
  if (Sname !== "na") {
    shop = new Shop({
      name: Sname,
      address: Saddress,
      phone: Scontact,
      email: Semail,
      product: [{ id: "first_product" }],
    });
    await shop.save();
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    email,
    phone,
    address,
    password: hashedPassword,
    shop: shop ? shop._id : undefined,
  });
  await user.save();

  return Response.json({
    message: "User created successfully",
    submited: user,
  });
}
