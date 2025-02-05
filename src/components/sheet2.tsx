"use client";

import React, { useState, useEffect } from "react";
import {
  FiHome,
  FiBarChart2,
  FiDollarSign,
  FiInbox,
  FiCalendar,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { MdDarkMode, MdOutlineWbSunny, MdMenu } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SHEET_SIDES = ["left"] as const;
type SheetSidee = (typeof SHEET_SIDES)[number];

export function SheetSidee() {
  const [active, setActive] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".sidebar")) {
        setActive("");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { label: "Dashboard", icon: <FiHome /> },
    { label: "Car Rent", icon: <FaCar /> },
    { label: "Insight", icon: <FiBarChart2 /> },
    { label: "Reimburse", icon: <FiDollarSign /> },
    { label: "Inbox", icon: <FiInbox /> },
    { label: "Calendar", icon: <FiCalendar /> },
  ];

  const preferenceItems = [
    { label: "Settings", icon: <FiSettings /> },
    { label: "Help & Center", icon: <FiHelpCircle /> },
  ];

  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MdMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="w-64 h-full p-4 bg-white shadow-lg overflow-auto">
            <div className="sidebar w-full h-full flex flex-col justify-between">
              <div>
                <h2 className="text-[#90A3BF] font-bold mb-4">Main Menu</h2>
                <div className="space-y-5">
                  {menuItems.map((item) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center gap-2 p-2 rounded-lg transition-colors ${
                        active === item.label ? "bg-[#3563E9] text-white" : "text-[#90A3BF]"
                      }`}
                      onClick={() => setActive(item.label)}
                    >
                      <span className={`text-lg ${active === item.label ? "text-white" : "text-[#90A3BF]"}`}>
                        {item.icon}
                      </span>
                      {item.label}
                    </button>
                  ))}
                </div>
                <h2 className="text-[#90A3BF] font-bold mt-6 mb-4">Preferences</h2>
                <div className="space-y-6">
                  {preferenceItems.map((item) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center gap-2 p-2 rounded-lg transition-colors ${
                        active === item.label ? "bg-[#3563E9] text-white" : "text-[#90A3BF]"
                      }`}
                      onClick={() => setActive(item.label)}
                    >
                      <span className={`text-lg ${active === item.label ? "text-white" : "text-[#90A3BF]"}`}>
                        {item.icon}
                      </span>
                      {item.label}
                    </button>
                  ))}
                  <div
                    className="flex items-center justify-between p-2 rounded-lg text-[#90A3BF] cursor-pointer hover:bg-[#f0f4ff]"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{darkMode ? <MdDarkMode /> : <MdOutlineWbSunny />}</span>
                      <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                    </div>
                    <div
                      className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
                        darkMode ? "justify-end bg-[#3563E9]" : "justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="w-full flex items-center gap-2 p-2 rounded-lg text-[#90A3BF] hover:bg-red-100 hover:text-red-600">
                  <span className="text-lg">
                    <FiLogOut />
                  </span>
                  Log Out
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}