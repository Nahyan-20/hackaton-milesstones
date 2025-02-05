"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import React, { useState } from "react";

const SHEET_SIDES = ["left"] as const;
type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  const [price, setPrice] = useState(100);

  return (
    <div className="">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MdMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="w-64 h-full p-4 bg-white shadow-lg overflow-auto">
            <div className="space-y-6">
              {/* Main Heading: Type */}
              <div className="space-y-5">
                <h2 className="text-[#90A3BF] font-bold mb-4">Type</h2>
                {[
                  { label: "Sport", count: 10 },
                  { label: "SUV", count: 10 },
                  { label: "MPV", count: 16 },
                  { label: "Sedan", count: 20 },
                  { label: "Coupe", count: 14 },
                  { label: "Hatchback", count: 14 },
                ].map((type) => (
                  <div key={type.label} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={type.label}
                      className="h-4 w-4 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]"
                    />
                    <label htmlFor={type.label} className="ml-2 text-sm text-gray-700">
                      {type.label} <span className="text-[#90A3BF]">({type.count})</span>
                    </label>
                  </div>
                ))}
              </div>

              {/* Main Heading: Capacity */}
              <div className="space-y-5">
                <h2 className="text-[#90A3BF] font-bold mb-4">Capacity</h2>
                {[
                  { label: "2 Person", count: 10 },
                  { label: "4 Person", count: 14 },
                  { label: "6 Person", count: 12 },
                  { label: "8 or More", count: 16 },
                ].map((capacity) => (
                  <div key={capacity.label} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={capacity.label}
                      className="h-4 w-4 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]"
                    />
                    <label htmlFor={capacity.label} className="ml-2 text-sm text-gray-700">
                      {capacity.label} <span className="text-[#90A3BF]">({capacity.count})</span>
                    </label>
                  </div>
                ))}
              </div>

              {/* Main Heading: Price */}
              <div className="mt-9 space-y-5">
                <h2 className="text-[#90A3BF] font-bold mb-4">Price</h2>
                <div className="mb-2">
                  <input
                    type="range"
                    min="20"
                    max="200"
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3563E9]"
                  />
                </div>
                <div className="text-sm text-gray-700">Max Price: ${price}.00</div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
