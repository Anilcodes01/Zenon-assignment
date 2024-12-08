"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

interface CarShowcaseProps {
  images: string[];
  modelPath: string;
}

const CarShowcase: React.FC<CarShowcaseProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0] || ""); 

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="container mb-4 overflow-hidden mx-auto bg-white h-[100vh] ">
      <div className="mb-4">
        <div className="relative w-full h-[100vh]">
          <Image
            src={selectedImage}
            alt="Selected Car Image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />

          <div className="flex absolute w-full  items-center p-4  justify-between">
            <div className="flex   justify-center ">
              <Link href={`/360-view`}>
                <button className="bg-gray-200 text-black px-4 py-1 rounded hover:bg-gray-300 transition">
                  360&deg; view
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-4  pl-20 pr-20 w-full">
            <Swiper
              className="p-2 "
              modules={[Pagination, Navigation]}
              spaceBetween={10}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 8,
                },
              }}
              navigation
              pagination={{ clickable: true }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => handleImageSelect(image)}
                    className={`
                cursor-pointer
                border-2 
                rounded-lg
                overflow-hidden
                transition-all
                duration-300
                hover:scale-105
                ${
                  selectedImage === image
                    ? "border-blue-500"
                    : "border-transparent"
                }
              `}
                  >
                    <Image
                      src={image}
                      alt={`Car image ${index + 1}`}
                      width={200}
                      height={150}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarShowcase;
