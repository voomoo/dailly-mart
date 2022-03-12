import React from "react";
import Product from "../models/productModel";
import mongoose from "mongoose";
import { Grid } from "@nextui-org/react";

export default function SingleProductPage({ productProps }) {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} md={6}>
        <img src={productProps.img} alt="" style={{maxHeight: "450px", margin:"0 auto"}}/>
      </Grid>
      <Grid xs={6} md={6} style={{display:"flex", flexDirection:"column"}}>
        <h2>{productProps.name}</h2>
        <br />
        <h4>৳ {productProps.price}</h4>
        <br />
        <p style={{maxWidth:"400px"}}>{productProps.desc}</p>
      </Grid>
    </Grid.Container>
  );
}

export async function getStaticPaths() {
  let products = [];

  try {
    await mongoose.connect(process.env.MONGO_URI);
    products = await Product.find({}, { _id: 1 });
  } catch (error) {
    console.log(error);
  }

  return {
    fallback: false,
    paths: products.map((product) => ({
      params: { slug: product._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  let product = {};
  try {
    await mongoose.connect(process.env.MONGO_URI);
    product = await Product.findById(context.params.slug);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      productProps: {
        name: product.productName,
        img: product.productImage,
        price: product.productPrice,
        desc: product.productDescription
      },
    },
    revalidate: 1,
  };
}
