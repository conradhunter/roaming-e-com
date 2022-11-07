import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import react from "../assets/react.jpeg";
import vue from "../assets/vue.jpeg";
import angular from "../assets/angular.jpeg";
import "@coreui/coreui/dist/css/coreui.min.css";
import HomeShopItem from "../components/HomeShopItem";
import { homePageProducts } from "../data/homeShopItems";

function Home() {
  return (
    <main className="">
      <section className="">
        <CCarousel controls interval={3000}>
          <CCarouselItem>
            <CImage src={react} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage src={vue} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage src={angular} alt="slide 1" />
          </CCarouselItem>
        </CCarousel>
      </section>

      <section className="row mx-auto">
        <h1 className="my-12 text-4xl text-center">Picks for you.</h1>
        <div className="flex flex-row justify-center">
          {homePageProducts.slice(0, 1).map((product) => {
            return (
              <HomeShopItem
                key={product.item}
                productsList={homePageProducts}
              />
            );
          })}
        </div>
      </section>

      <section>
       {/* Search query / category search input?? */}
      </section>
    </main>
  );
}

export default Home;
