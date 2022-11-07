import React from "react";
import { homePageProducts } from "../data/homeShopItems";
import blackHoodie from "../assets/black-hoodie.webp";

function HomeShopItem({ productsList }) {
  return (
    <>
      {productsList.map((product) => {
        return (
          <div key={product.item}>
            <img src={blackHoodie} alt="" className="" />
            <h1>{product.product}</h1>
            <h1>{product.price}</h1>
            <select name="" id="">
              <option value="">{product.sizes}</option>
            </select>
          </div>
        );
      })}
    </>
  );
}

export default HomeShopItem;
