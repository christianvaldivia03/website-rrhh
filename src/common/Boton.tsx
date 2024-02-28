"use client";
import React from "react";

interface Props {
  title: string;
  style?: boolean;
  type?: string;
  classnames?: string;
  onClick?: () => void;
}

const Boton = (props: Props) => {
  const { title, style, classnames, onClick, type } = props;
  const styles = style ? "bg-primary text-white" : "bg-white text-primary";
  const classBoton = `${styles}`;
  return (
    <>
      <button
        type={type ? type : "button"}
        onClick={onClick}
        className={`${classBoton} px-10 py-2 border-[2px] border-primary font-semibold`}
      >
        {title}
      </button>
    </>
  );
};

export default Boton;
