import { Person } from "@/components/persona/Person";
import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl text-secondary mb-2">
          Registro de Personas del sistema
        </h1>
        <div className=" max-w-[1500px] m-auto flex-col items-center justify-center">
          <Person />
        </div>
      </div>
    </>
  );
};

export default page;
