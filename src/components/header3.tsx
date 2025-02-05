import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { IoHeartSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

export default function Header3() {
  return (
    <header className="w-full  mb-6 sm:mb-0 h-[100px] bg-[#FAFAFA] flex flex-wrap justify-between items-center border">
    {/* Logo (Div 1) */}
    <div className="order-1 sm:order-1 flex-shrink-0 ml-4 sm:ml-10">
      <a href="/">
        <h1 style={{ color: "#3563E9" }} className="text-4xl sm:text-3xl font-bold">
          MORENT
        </h1>
      </a>
    </div>
  

    {/* Image and icons (Div 3) */}
    <div className="order-2 sm:order-3 flex sm:items-center justify-center sm:justify-between space-x-5 mr-4 sm:mr-7">
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
  
      {/* Profile Image */}
      <a href="#">
        <img
          className="w-12 h-12 rounded-full flex-shrink-0"
          src="/headerpic.png"
          alt="Profile"
        />
      </a>
    </div>
  </header>
  
  );
}