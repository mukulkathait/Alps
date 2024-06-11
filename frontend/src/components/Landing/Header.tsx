// import React from "react";
import mediumLogo from "../../assets/Medium-Logo-Black-RGB@1x.png";
import Button from "../Button";

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
        <div className="text-nowrap">Sign in</div>
        <Button
          name="Get started"
          type="submit"
          className="bg-black text-white px-4 font-semibold"
        />
      </div>
    </div>
  );
}

export default Header;
