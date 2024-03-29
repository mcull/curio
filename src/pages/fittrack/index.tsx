import * as React from "react";
import logo from "./fittrack-logo.png"
import { navigate } from "gatsby"

const logoImageClassName = "max-w-full aspect-square fill-[url(" + logo + ")_lightgray_0px_0px_/_100%_100%_no-repeat] w-[188px]"; 

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-5 pt-20 pb-8 font-bold bg-zinc-950 max-w-[375px] text-white text-opacity-80">
      <h1 className="mt-28 text-3xl">Welcome to FitTrack</h1>
      <p className="mt-6 text-base">Track your progress and stay motivated</p>

      <img
        src={logo}
        alt="FitTrack app logo"
        className={logoImageClassName}
      />
      <button 
        className="overflow-hidden relative flex justify-center items-center px-16 py-5 mt-24 w-full text-lg aspect-[5.98] bg-rose-500 text-stone-950 py-2 px-4 rounded-full"
        onClick={()=>{navigate("/fittrack/signin")}}
      >
        Get Started
      </button>
    </div>
  );
};

export default MyComponent;