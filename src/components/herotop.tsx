import React from 'react';

const Herotop = () => {
  return (
    <main className="w-full h-[420px] flex justify-items-center gap-4 ">
      <div className="bg-[#54A6FF]  w-[330px] h-[300px] sm:w-[530px] sm:h-[330px] top-[32px] left-[64px] rounded-[10px]  sm:-space-y-3 transform translate-x-5 sm:translate-x-10 sm:p-4 flex justify-center sm:justify-start mt-10">
        <div className="relative w-full">
          {/* Text Content */}
          <div className="absolute top-4 left-4 w-[284px] h-[224px]">
            <h1 className="font-bold text-xl md:text-3xl w-[272px] h-[96px] text-white">
              The Best Platform for Car Rental
            </h1>
            <p className="w-[272px] h-[96px] text-white">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="bg-[#3563E9] text-white rounded py-2 px-4 h-[44px] w-[120px] mt-4">
              Rental Car
            </button>
          </div>

          {/* Image */}
          <img
            className="absolute top-40 left-32 sm:left-52 w-[205px] h-[140px] sm:w-[306px] sm:h-[170px]" // Increased `top` value
            src="/car1.png"
            alt="Car"
          />
        </div>
      </div>


  {/* div 2 */}
      <div className="hidden bg-[#3563E9] w-[530px] mt-10 h-[330px] top-[32px] left-[64px] rounded-[10px] -space-y-3 transform translate-x-10 p-4 sm:flex">
        <div className="relative w-full">
          {/* Text Content */}
          <div className="absolute top-4 left-4 w-[284px] h-[224px]">
            <h1 className="font-bold text-xl md:text-3xl w-[272px] h-[96px] text-white">
            Easy way to rent a car at a low price
            </h1>
            <p className="w-[272px] h-[96px] text-white">
            Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-[#54A6FF] text-white rounded py-2 px-4 h-[44px] w-[120px] mt-4">
              Rental Car
            </button>
          </div>

          {/* Image */}
          <img
            className=" absolute top-40 left-60 w-[260px] h-[170px]" // Increased `top` value
            src="/cae2.png"
            alt="Car"
          />
        </div>
      </div>
    </main>
  );
};

export default Herotop;