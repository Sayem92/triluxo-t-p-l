import React from "react";
import { BiLoader } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full pt-10">
      <BiLoader size={30} className="fill-primary-500 animate-spin" />
    </div>
  );
};

export const LoaderSpin = ({ className, size = 24 }) => (
  <BiLoader size={size} className={`animate-spin ${className}`} />
);

export default Loader;
