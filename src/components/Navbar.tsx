import React from "react";
import { Button } from "./ui/button";
import { BsTwitterX } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-sky-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="cursor-pointer text-3xl font-bold text-white ">
            <BsTwitterX />
          </h1>
          <div className="flex gap-4">
            <Button>Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
