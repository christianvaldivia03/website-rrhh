import { Trabajador } from "@/components/trabajador/Trabajador";
import React from "react";

const page = () => {
  return (
    <div className="">
      <h1 className="text-3xl text-secondary mb-2">
        Registro de Trabajadores del sistema
      </h1>
      <div className=" flex-col items-center justify-center">
        <Trabajador />
      </div>
    </div>
  );
};

export default page;
