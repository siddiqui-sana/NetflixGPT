import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-4 w-full flex justify-between items-center px-16 py-2 bg-gradient-to-b from-black">
      <div>
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div>
        <button className="px-4 py-2 mr-4 bg-red-600 hover:bg-red-700 text-white rounded">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
