import mongoose from "mongoose";
const shop = new mongoose.Schema(
  {
    name: { type: String },
    phone: { type: Number },
    address: { type: String },
    email: { type: String },
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]

  },
  { timestamps: true }
);

const Shop = mongoose.models.Shop || mongoose.model("Shop", shop);
export default Shop;
