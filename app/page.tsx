"use client";
import React, { useState } from "react";
import CarShowcase from "@/app/components/ImageCarousal";
import CarShowcasePage from "./components/CarDetails";

const images = [
  "/images/t1.avif",
  "/images/t3.avif",
  "/images/t5.avif",
  "/images/t7.avif",
  "/images/t8.avif",
  "/images/t9.avif",
  "/images/t10.avif",
  "/images/t11.avif",
  "/images/t12.avif",
  "/images/t1.avif",
];

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative h-[100vh]  bg-gray-100 overflow-hidden">
      <div className="h-[100vh] overflow-hidden">
        <CarShowcase
          images={images}
          modelPath="/models/uploads_files_3262252_r8.fbx"
        />
        <button
          onClick={() => setShowDetails(true)}
          className="absolute top-4 right-4 bg-gray-200 text-black px-4 py-1 rounded hover:bg-gray-300 transition"
        >
          Details
        </button>
      </div>

      {showDetails && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-10"
            onClick={() => setShowDetails(false)}
          />

          <div
            className={`fixed top-0 right-0 w-full md:w-[40%] h-full   z-20 transform transition-transform ${
              showDetails ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-600 hover:text-black transition"
              >
                ✕
              </button>
            </div>
            <CarShowcasePage />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
