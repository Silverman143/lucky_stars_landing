import React from "react";
import { text } from "stream/consumers";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, ...props }) => {
  return (
    <button className=" py-2 px-3 border border-black rounded-xl" {...props}>
      <text className=" font-spaceGrotesk text-xl">{text}</text>
    </button>
  );
};

export default CustomButton;
