import { Container } from "@nextui-org/react";
import React from "react";
import { useAppContext } from "../_context/context";

export default function Cart() {
  const { cart } = useAppContext();
  return (
    <Container>
      {cart.length === 0 ? (
        <h1>No item in the cart</h1>
      ) : (
        cart.map((cartItem, index) => (
          <h4 key={index}>
            {cartItem.name} ⇒{" "}
            <span style={{ color: "red" }}>{cartItem.price}</span>
          </h4>
        ))
      )}
      <h3>
        Total:{" "}
        <span style={{ color: "red" }}>
          {" "}
          {cart
            .map((item) => item.price)
            .reduce((prev, curr) => prev + curr, 0)}
        </span>
      </h3>
    </Container>
  );
}
