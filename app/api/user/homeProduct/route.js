import { NextResponse } from 'next/server';
import product from '@/model/product';
import dbConnect from '@/lib/mogobd';

export async function POST(request) {
    dbConnect
const { page = 1, excludeIds = [] } = await request.json();
const limit = 5;
const skip = (page - 1) * limit;
const query = excludeIds.length ? { _id: { $nin: excludeIds } } : {};
const products = await product.find(query).skip(skip).limit(limit);
  return NextResponse.json(products);
}
