"use client";
import React, { useState } from "react";

interface CarDetails {
  model: string;
  year: number;
  mileage: string;
  price: string;
}

const CarShowcasePage: React.FC = () => {
  const car: CarDetails = {
    model: "Audi R8",
    year: 2022,
    mileage: "20,000 miles",
    price: "$80,000",
  };

  const [invites, setInvites] = useState<number>(10);
  const [duration, setDuration] = useState<number>(1);
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const RATE_PER_INVITE = 10;

  const handleCalculate = () => {
    const totalPrice = invites * duration * RATE_PER_INVITE;
    setCalculatedPrice(totalPrice);
  };

  return (
    <div className="container bg-black/30 bg-opacity-20 backdrop-blur-sm text-white flex flex-col gap-4 rounded-xl mx-auto p-6 h-[590px] shadow-lg">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Car Overview</h2>
        <div className="p-4 border border-gray-700 rounded-lg bg-gray-900 bg-opacity-60">
          <p>
            <span className="font-medium text-gray-400">Model:</span>{" "}
            {car.model}
          </p>
          <p>
            <span className="font-medium text-gray-400">Year:</span> {car.year}
          </p>
          <p>
            <span className="font-medium text-gray-400">Mileage:</span>{" "}
            {car.mileage}
          </p>
          <p>
            <span className="font-medium text-gray-400">Price:</span>{" "}
            {car.price}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Price Calculator</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCalculate();
          }}
          className="flex flex-col gap-6"
        >
          <div>
            <label
              htmlFor="invites"
              className="block mb-2 font-medium text-gray-300"
            >
              Number of Invites:{" "}
              <span className="text-blue-400">{invites}</span>
            </label>
            <input
              type="range"
              id="invites"
              min="1"
              max="100"
              value={invites}
              onChange={(e) => setInvites(Number(e.target.value))}
              className="w-full cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>1</span>
              <span>100</span>
            </div>
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block mb-2 font-medium text-gray-300"
            >
              Duration of Event (hours):{" "}
              <span className="text-blue-400">{duration}</span>
            </label>
            <input
              type="range"
              id="duration"
              min="1"
              max="40"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>1</span>
              <span>40</span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Calculate Price
          </button>
        </form>

        {calculatedPrice !== null && (
          <div className="mt-4 p-4 bg-gray-900 bg-opacity-70 rounded-lg">
            <h3 className="text-lg font-medium">
              Total Price:{" "}
              <span className="text-blue-400">${calculatedPrice}</span>
            </h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default CarShowcasePage;
