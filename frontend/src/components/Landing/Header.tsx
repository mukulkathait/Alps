// import React from "react";
import mediumLogo from "../assets/Medium-Logo-Black-RGB@1x.png";
import Button from "../Button";

function Header({ className = "" }) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className="w-48">
        <img src={mediumLogo} alt="Medium logo" />
      </div>
      <div className="flex gap-6 font-semibold items-center">
        <div>Our story</div>
        <div>Membership</div>
        <div>Write</div>
        <div>Sign in</div>
        <Button
          name="Get started"
          type="submit"
          className="px-4 font-semibold"
        />
      </div>
    </div>
  );
}

export default Header;
