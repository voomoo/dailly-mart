import mongoose from "mongoose";
import Product from "../../../models/productModel";

export default async function handler (req, res) {
  await mongoose.connect(process.env.MONGO_URI);
  if (req.method === 'POST') {
    // Check if product name, description and price is provided
    const { productName, productDescription, productPrice } = req.body;
    if (productName && productDescription && productPrice) {
        try {
          var product = new Product({
            productName,
            productDescription,
            productPrice
          });
          // Create new product
          var productCreated = await product.save();
          return res.status(200).send(productCreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        return res.status(422).send('data_incomplete');
      }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} not supported`})
  }
  
};
