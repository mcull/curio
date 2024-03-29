import * as React from "react";
import backgroundImg from "./background.png";
import { navigate } from "gatsby";
import Button from "../components/button";

interface InputFieldProps {
  id: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, placeholder }) => (
    <div className="mb-4">
        <input className="shadow fill-zinc-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={id} type="text" placeholder={placeholder} />
    </div>
);

const SignIn: React.FC = () => {
  const inputFields: InputFieldProps[] = [
    { id: "profileName", placeholder: "Profile Name", ariaLabel: "Enter your profile name" },
    { id: "email", placeholder: "Email", ariaLabel: "Enter your email" },
    { id: "password", placeholder: "Password", ariaLabel: "Enter your password" },
    { id: "retypePassword", placeholder: "Retype Password", ariaLabel: "Retype your password" },
  ];

  const backgroundClassName = "flex overflow-hidden relative flex-col items-center pt-20 text-base aspect-[0.56] fill-[url(" + backgroundImg + ")_lightgray_-86px_-25px_/_150.4%_57.121%_no-repeat] max-w-[375px] text-white text-opacity-80";
  return (
    <div className={backgroundClassName}>
      <img loading="lazy" src={backgroundImg} alt="Background" className="object-cover absolute inset-0 size-full" />
      <h1 className="relative mt-4 text-3xl font-bold">FitTrack</h1>
      <p className="relative mt-3">Track progress, Get recommendations</p>
      <div className="rounded-t-2xl flex text-zinc-800 bg-zinc-800 overflow-hidden relative flex-col self-stretch py-5 mt-8 w-full aspect-[0.77] ">
        <div className="flex relative flex-col items-center px-6 mt-7 w-full">
          <h2 className="self-stretch text-2xl font-bold text-white text-opacity-80">Get Started</h2>
          <form className="shadow-md rounded px-8 pt-6 ">
            {inputFields.map((field) => (
              <InputField key={field.id} {...field} />
            ))}
          </form>
          <Button text="Join" onClick={()=>{navigate("/fittrack/personalize")}} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;