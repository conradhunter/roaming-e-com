import React, { useEffect } from "react";
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

      <section className="bg-blue-200 mt-12 py-12">
        {/* Search query / category search input?? */}
        <h1 className="text-4xl text-center mb-8">About.</h1>
        <p className="max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          voluptatibus molestias? Repellat soluta adipisci harum doloribus nisi
          rerum illum distinctio doloremque, iusto architecto eius sapiente ea
          cupiditate pariatur eos, ex libero modi quidem totam. Illo, quibusdam
          ab. Consequuntur earum dolorum ipsa doloremque numquam, suscipit
          repellendus reiciendis officia velit. Minima placeat sequi atque rerum
          ut maxime eum provident, temporibus neque dolorem? Eius iste
          quibusdam, fugiat distinctio impedit alias, adipisci eveniet quaerat
          architecto minima cum laborum nulla, saepe consequuntur non illum
          maiores in facilis deserunt! Unde, laboriosam perspiciatis qui sit
          debitis ex repudiandae ut, voluptatibus dolorem doloremque dolorum
          accusantium sapiente enim ratione? Aut nulla exercitationem recusandae
          incidunt veniam, neque provident accusantium eligendi magnam numquam
          consequatur repellat dolorem illo nihil! Sit eos asperiores
          doloremque? Dolorem quod, dolorum est rerum accusamus laboriosam
          beatae tempore quam, neque distinctio earum! Cumque cupiditate facilis
          molestiae voluptatum nobis, iste consequatur expedita? Ea vel
          distinctio temporibus non explicabo impedit nemo, tempore dicta
          cupiditate provident, blanditiis quas. Maiores corrupti temporibus
          officia iste dignissimos aperiam quidem reiciendis dolor nemo
          voluptate! Beatae aspernatur ad assumenda itaque pariatur praesentium
          eveniet ab, hic sit in quas animi, ipsam magni saepe. Officiis unde
          fugit esse consequuntur dolore recusandae amet facilis accusamus
          ipsum! Qui, provident aut?
        </p>
      </section>
    </main>
  );
}

export default Home;
