import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { IoHeartSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { SheetSide } from "./sheet";

export default function Header2() {
  return (
    <header className="w-full h-[180px] mb-6 sm:mb-0 sm:h-[100px] bg-[#f5f2f2] flex flex-wrap justify-between items-center border sm:gap-0 gap-y-4 overflow-x-hidden max-w-full">
    {/* Image and icons (Div 3) */}
    <div className="order-1 sm:order-3 w-full sm:w-auto flex justify-end sm:justify-between items-center space-x-5 mr-4 sm:mr-7 max-w-full">
      {/* Icons */}
      <div className="hidden sm:flex space-x-5 text-2xl text-gray-800">
        <a href="#">
          <IoHeartSharp className="text-2xl" />
        </a>
        <a href="#">
          <IoIosNotifications className="text-3xl" />
        </a>
        <a href="#">
          <IoMdSettings className="text-2xl" />
        </a>
      </div>
      <div className="md:hidden absolute left-0 mt-4">
        <SheetSide />
      </div>
  
      {/* Profile Image */}
      <a href="#">
        <img
          className="w-9 h-9 sm:w-12 sm:h-12 rounded-full sm:flex-shrink-0 mr-8 sm:mr-0 translate-y-3 sm:translate-y-0"
          src="/headerpic.png"
          alt="Profile"
        />
      </a>
    </div>
  
    {/* Logo (Div 1) */}
    <div className="order-2 sm:order-1 w-full sm:w-auto text-left mt-2 sm:mt-0 ml-7 sm:ml-10 max-w-full">
      <a href="/">
        <h1 style={{ color: "#3563E9" }} className="text-3xl font-bold">
          MORENT
        </h1>
      </a>
    </div>
  
    {/* Search bar with settings icon (Div 2) */}
    <div className="order-3 sm:order-2 w-full sm:w-auto flex justify-center sm:justify-between items-center mt-4 sm:mt-0 px-4 sm:px-0 max-w-full">
      {/* Search bar */}
      <div className="flex justify-center items-center sm:items-start w-[90%] sm:w-1/3 ml-7 sm:ml-0">
        <div className="flex items-center relative w-full">
          <FaMagnifyingGlass className="absolute left-3 text-gray-500 text-xl" />
          <input
            placeholder="Search something here"
            className="w-full sm:w-auto pl-10 sm:pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
  
      {/* Settings Icon */}
      <a href="#" className="mr-9 sm:ml-6">
        <VscSettings className="text-2xl font-bold" />
      </a>
    </div>
  </header>
  
  );
}
