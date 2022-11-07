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
    <main>
      <section className="mb-32">
        <CCarousel controls>
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

      <section>
        <div className="w-1/4 flex flex-wrap">
          {homePageProducts.map((product) => {
            return (
              <HomeShopItem
                key={product.item}
                productsList={homePageProducts}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;
