import React from "react";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  valor?: string;
  className?: string;
  classNameBotton?: string;
  type?: string;
  children?: React.ReactNode;
}

export const ButtonNext = (props: Props) => {
  return (
    <div className={props.className || ""}>
      <div></div>
      <button
        type={props.type as "button" | "submit" | "reset" | undefined} // Fix: Update the type of the 'type' prop
        onClick={props.onClick}
        className={`${props.classNameBotton} bg-[#6366F1] text-white letter rounded-sm px-4 py-2`}
      >
        {props.valor}
        {props.children}
      </button>
    </div>
  );
};
