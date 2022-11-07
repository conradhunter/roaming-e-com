import React from "react";

function HomeShopItem({ productsList }) {
  return (
    <div className="flex">
      {productsList.map((product ) => {
        return (
          <div key={product.item} className="w-56 flex flex-col items-center">
            <img src={product.img} alt="" className="h-72 object-cover w-52" />
            <h1>{product.product}</h1>
            <h1>{product.price}</h1>
            <select name="" id="" className="select select-primary w-fit bg-blue-100">
              <option value="">{product.sizes[0]}</option>
              <option value="">{product.sizes[1]}</option>
              <option value="">{product.sizes[2]}</option>
              <option value="">{product.sizes[3]}</option>
              <option value="">{product.sizes[4]}</option>
              <option value="">{product.sizes[5]}</option>
            </select>
            <button className="btn btn-primary w-fit mx-auto uppercase">Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default HomeShopItem;
