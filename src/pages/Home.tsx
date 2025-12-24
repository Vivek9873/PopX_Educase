import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-93.75 h-203 bg-[#F7F8F9] flex flex-col   px-5">
        <div className=" relative top-144.75">
          <div className="mb-6">
            <h1 className="font-medium text-[28px] text-[#1D2226] mb-2.5 w-57.75 h-8.25">
              Welcome to PopX
            </h1>
            <p className="text-[18px] text-[#1D2226] opacity-60  w-58 h-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link to={"/signup"}>
              <button className="w-full h-11.5 text-center text-[16px] bg-[#6C25FF] text-white font-medium rounded-md ">
                Create Account
              </button>
            </Link>
            <Link to={"/signin"}>
              <button className="w-full h-11.5 text-[16px] text-center text-[#1D2226]  bg-[#6C25FF4B] font-medium rounded-md">
                Already Registered? Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
