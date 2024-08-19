// import React from "react";
import { Link } from "react-router-dom";
import mediumLogo from "../../assets/Medium-Logo-Black-RGB@1x.png";

function Header({ className = "" }) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className="w-48">
        <img src={mediumLogo} alt="Medium logo" />
      </div>
      <div className="flex gap-6 font-semibold items-center">
        <div className="text-nowrap">Our story</div>
        <div className="text-nowrap">Membership</div>
        <div className="text-nowrap">Write</div>
        <Link to="/signin" className="text-nowrap">
          Sign in
        </Link>
        <Link
          to="/signup"
          className="bg-black text-white px-4 font-semibold text-nowrap py-2.5 w-full text-center border border-black rounded-lg"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Header;
