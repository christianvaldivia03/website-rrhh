import { Person } from "@/components/persona/Person";
import { CircleInit } from "@/shared/icons/CircleInit";
import { List } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-9">
        <div className="col-span-1 bg-[#1E293B]">
          <div className="m-4">
            <CircleInit />
          </div>
          <p className="text-center">Sistema RRHH</p>
        </div>

        <div className="col-span-8">
          <h1 className="text-3xl text-secondary">
            Registro de Personas del sistema
          </h1>
          {/* <p>Actualizar</p> */}
          {/* <Formulario /> */}
          <Person />
        </div>
      </div>
    </>
  );
};

export default page;
