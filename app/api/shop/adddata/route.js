import dbConnect from "@/lib/mogobd";
import Product from "@/model/product";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseFormData(request) {
  const uploadDir = path.join(process.cwd(), "/public/uploads");
  fs.mkdirSync(uploadDir, { recursive: true });

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    multiples: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(request, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(req) {
  await dbConnect();

  try {
    const { fields, files } = await parseFormData(req);

    const { name, price, realPrice, description, category } = fields;
    const image = files.file?.[0] || files.file;

    const data = new Product({
      name,
      price,
      realPrice,
      description,
      category,
      image: image?.newFilename || "",
    });

    await data.save();

    return Response.json({ success: true, product: data }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
