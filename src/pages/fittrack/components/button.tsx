import * as React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
      <button className="overflow-hidden relative flex justify-center items-center px-16 py-5 mt-16 w-full text-lg aspect-[5.98] bg-rose-500 text-stone-950 py-2 px-4 rounded-full" onClick={onClick}>
        {text}
      </button>
    );
  };

  export default Button;