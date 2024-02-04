import { Person } from "@/components/persona/Person";
import React from "react";
import { Menu } from "./Menu";

const page = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl text-secondary">
          Registro de Personas del sistema
        </h1>
        <div className=" flex-col items-center justify-center">
          <Person />
        </div>
      </div>
    </>
  );
};

export default page;
