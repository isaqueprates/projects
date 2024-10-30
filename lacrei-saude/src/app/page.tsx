import React from "react";
import { imagens } from "../utils/slide";
import "./home.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <div className="container ">
        <div className="slider-wrapper">
          <div className="slider">
            {imagens.map((img, index) => (
              <div className="slider-item" key={index}>
                <img src={img.src} alt="slider de imagens"/>
                <p className="color-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            ))}
          </div>
        </div>
       </div>

        {/* <Swiper
          
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {imagens.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.src} alt="slider de imagens" />
              <p className="color-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </main>
    </div>
  );
}
