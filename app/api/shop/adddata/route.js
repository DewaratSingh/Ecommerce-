import { writeFile, mkdir } from "fs/promises";
import path from "path";
import product from "@/model/product";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mogobd";
import Shop from "@/model/shop";

function generateFileName(originalName) {
  const timestamp = Date.now();
  const ext = path.extname(originalName);
  return `file-${timestamp}-${Math.random().toString(36).slice(2)}${ext}`;
}

async function addFile(file, uploadDir) {
  if (!file || typeof file === "string") return null;

  const newFileName = generateFileName(file.name);
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadPath = path.join(uploadDir, newFileName);
  await writeFile(uploadPath, buffer);
  return newFileName;
}

export async function POST(request) {
  await dbConnect();

  const formData = await request.formData();
  const name = formData.get("name");
  const price = formData.get("price");
  const description = formData.get("description");
  const realPrice = formData.get("realPrice");
  const category = formData.get("category");
  const shop_id = formData.get("shop_id");

  const files = [
    formData.get("file1"),
    formData.get("file2"),
    formData.get("file3"),
    formData.get("file4"),
    formData.get("file5"),
  ];

  // Validate that all 5 files exist
  if (files.some(file => !file || typeof file === "string")) {
    return NextResponse.json({ error: "All 5 files must be provided" }, { status: 400 });
  }

  // Create upload folder
  const folderName = Date.now().toString();
  const uploadDir = path.join(process.cwd(), "public", "uploads", folderName);
  await mkdir(uploadDir, { recursive: true });

  // Save files
  const imageFileNames = [];
  for (const file of files) {
    const fileName = await addFile(file, uploadDir);
    imageFileNames.push(fileName);
  }

  // Save product
  const newProduct = new product({
    name,
    price,
    realPrice,
    description,
    category,
    folderName,
    image: imageFileNames,
  });

  await newProduct.save();
console.log("Product saved:", newProduct._id);
 const updatedShop = await Shop.findByIdAndUpdate(
    shop_id,
    { $push: { product: newProduct._id } },
    { new: true }
  );

  return NextResponse.json({
    message: "Product and files uploaded successfully",
    folderName,
  });
}
