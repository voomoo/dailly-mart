import mongoose from "mongoose";
import Product from "../../../models/productModel";

export default async function handler (req, res) {
    await mongoose.connect(process.env.MONGO_URI)
  if (req.method === 'GET') {
    // Check if product name, description and price is provided
    const product = await Product.findById(req.query.slug)
    res.status(200).json({product})
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} not supported`})
  }
};
