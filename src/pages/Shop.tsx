import React, { useState } from "react";
import StoreItemPreview from "../components/StoreItemPreview";

function Shop() {
  // Stripe or Shopify??

  const [cart, setCart] = useState([]);

  const addToCart = () => {

  }

  return (
    <main className="row mx-auto">
      <h1 className="my-12 text-4xl text-center">Browse our products.</h1>
      <section className="flex flex-wrap justify-center gap-8">
        <StoreItemPreview />
        <StoreItemPreview />
        <StoreItemPreview />
        <StoreItemPreview />
        <StoreItemPreview />
        <StoreItemPreview />
        <StoreItemPreview />
        <StoreItemPreview />
      </section>
    </main>
  );
}

export default Shop;
