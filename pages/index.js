import React from "react";

import Product from "../models/productModel";
import mongoose from "mongoose";
import ProductList from "../Components/ProductList";

export default function HomePage({ products }) {
  return (
    <ProductList products={products}/>
  );
}

export async function getStaticProps() {
  let products = [];
  try {
    await mongoose.connect(process.env.MONGO_URI);
    products = await Product.find();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      products: products.map((product) => ({
        name: product.productName,
        img: product.productImage,
        price: product.productPrice,
        id: product._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
