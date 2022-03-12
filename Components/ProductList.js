import React from 'react'
import Link from "next/link"
import { useAppContext } from '../_context/context';
import {
    Container,
    Grid,
    Card,
    Row,
    Text,
    Col,
    Button,
  } from "@nextui-org/react";

export default function ProductList({products}) {
    const myCart = useAppContext()
  return (
    <Container>
      <Grid.Container gap={2} justify="center">
        {products.map((product, index) => (
          <Grid xs={3} key={index}>
            <Card hoverable clickable cover css={{ w: "100%" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    New
                  </Text>
                </Col>
              </Card.Header>

              <Card.Body>
                <Link href={`/${product.id}`}>
                  <a>
                    <Card.Image
                      src={product.img}
                      height={400}
                      width="100%"
                      alt="Card example background"
                    />
                  </a>
                </Link>
              </Card.Body>

              <Card.Footer
                blur
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text color="#000" size={14}>
                      {product.name}
                    </Text>
                    <Text color="#000" size={18}>
                      ৳ {product.price}
                    </Text>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        rounded
                        color="secondary"
                        onClick={() => {
                          myCart.setCart([
                            ...myCart.cart,
                            { name: product.name, price: product.price },
                          ]);
                          console.log(myCart.cart);
                        }}
                      >
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          Add to Cart
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  )
}
