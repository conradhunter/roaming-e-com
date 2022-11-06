import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import react from '../assets/react.jpeg';
import vue from '../assets/vue.jpeg';
import angular from '../assets/angular.jpeg';
import '@coreui/coreui/dist/css/coreui.min.css'


function Home() {
  return (
    <main>

      <section className="">
        <CCarousel controls>
          <CCarouselItem>
            <CImage src={react} alt='slide 1'/>
          </CCarouselItem>
          <CCarouselItem>
            <CImage src={vue} alt='slide 1'/>
          </CCarouselItem>
          <CCarouselItem>
            <CImage src={angular} alt='slide 1'/>
          </CCarouselItem>
        </CCarousel>
      </section>

    </main>
  );
}

export default Home;
