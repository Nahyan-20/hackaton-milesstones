import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font h-auto bg-slate-50 w-full overflow-hidden">
      <div className=" px-5 py-10 mx-auto flex flex-col justify-start items-start md:flex-row md:flex-nowrap md:pl-20">
        {/* Logo and Description - Adjusted Width */}
        <div className="w-full md:w-56 flex-shrink-0 text-center md:text-left sm:mr-24">
          <span style={{ color: "#3563E9" }} className="text-3xl sm:text-xl font-bold ">MORENT</span>
          <p className="mt-2 max-w-xs text-sm text-gray-500 sm:max-w-none">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Navigation Links - Unchanged */}
        <div className="flex flex-wrap w-full md:flex-nowrap justify-center md:justify-end mt-10 md:mt-0 gap-y-8">
          {/* About */}
          <div className="sm:flex sm:space-x-10 space-y-4">
            <div className="w-full sm:w-auto px-4 text-center sm:text-left pt-4">
              <h2 className="title-font text-base font-medium text-gray-900 tracking-widest mb-4">About</h2>
              <nav className="list-none space-y-2">
                <li><a className="text-gray-600 hover:text-gray-800">How it works</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Featured</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Partnership</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Business Relation</a></li>
              </nav>
            </div>

            {/* Community */}
            <div className="w-full sm:w-auto px-4 text-center sm:text-left">
              <h2 className="title-font text-base font-medium text-gray-900 tracking-widest mb-4">Community</h2>
              <nav className="list-none space-y-2">
                <li><a className="text-gray-600 hover:text-gray-800">Events</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Blogs</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Podcast</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Invite a friend</a></li>
              </nav>
            </div>

            {/* Socials */}
            <div className="w-full sm:w-auto px-4 text-center sm:text-left">
              <h2 className="title-font text-base font-medium text-gray-900 tracking-widest mb-4">Socials</h2>
              <nav className="list-none space-y-2">
                <li><a className="text-gray-600 hover:text-gray-800">Discord</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Instagram</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Twitter</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Facebook</a></li>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Unchanged */}
      <div className="border-t mt-6 w-full">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">©2022 MORENT. All rights reserved</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a className="text-gray-500 hover:underline">Privacy & Policy</a>
            <a className="text-gray-500 hover:underline">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;