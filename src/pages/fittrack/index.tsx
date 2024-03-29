import * as React from "react";
import logo from "./fittrack-logo.png"
import { navigate } from "gatsby"
import Button from "./components/button"



const logoImageClassName = "max-w-full aspect-square fill-[url(" + logo + ")_lightgray_0px_0px_/_100%_100%_no-repeat] w-[188px]"; 


const Splash: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-5 pt-20 pb-8 font-bold bg-zinc-850 max-w-[375px] text-white text-opacity-80">
      <h1 className="mt-28 text-3xl">Welcome to FitTrack</h1>
      <p className="mt-6 text-base">Track your progress and stay motivated</p>

      <img
        src={logo}
        alt="FitTrack app logo"
        className={logoImageClassName}
      />
      <Button text="Get Started" onClick={()=>{navigate("/fittrack/signin")}}/>
    </div>
  );
};

export default Splash;