"use client"
import React from "react";
import axios from "axios";
import { useParams } from "next/navigation";


export default function AddProductPage() {
  const { slug } = useParams();
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData.append("shop_id",  slug);
    console.log(formData);
    try{
      const response = await axios.post("/api/shop/adddata", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <div>
      <div className="m-auto w-[100%] max-w-[500px]">
        <h1 className="text-5xl">Add Product</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="h-[50px] w-full mt-5 border"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="h-[50px] w-full mt-5 border"
            type="text"
            name="price"
            placeholder="Price"
            required
          />
          <input
            className="h-[50px] w-full mt-5 border"
            type="text"
            name="realPrice"
            placeholder="Real Price"
            required
          />
          <input
            className="h-[50px] w-full mt-5 border"
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          <input
            className="h-[50px] w-full mt-5 border"
            type="text"
            name="category"
            placeholder="Category"
            required
          />
          <input
            className="h-[50px] w-full mt-5 border"
            type="file"
            name="file1"
            placeholder="Upload Images of Product"
            required
          />
          <input
            className="h-[50px] w-full mt-5 border"
            type="file"
            name="file2"
            placeholder="Upload Images of Product"
            required
          />
          <input
            className="h-[50px] w-full mt-5 border"
            type="file"
            name="file3"
            placeholder="Upload Images of Product"
            required
          />
          <input
            className="h-[50px] w-full mt-5 border"
            type="file"
            name="file4"
            placeholder="Upload Images of Product"
            required
          />
          <input
            className="h-[50px] w-full mt-5 border"
            type="file"
            name="file5"
            placeholder="Upload Images of Product"
            required
          />
        
          Upload Images of Product
          <br />
          <input
            className="border pl-5 pr-5 pt-3 pb-3 bg-pink-600"
            type="submit"
            value="Submit"
          />
        </form>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}