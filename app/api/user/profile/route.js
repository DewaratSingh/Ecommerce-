import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import dbConnect from "@/lib/mogobd";
import User from "@/model/resister";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  const user = await User.findById(session.user.id);
  
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  user.name = user.name;
  await user.save();

  return NextResponse.json({
    user: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      shop: user.shop,
      createdAt: user.createdAt, 
    },
  });
}
