import { Person } from "@/components/persona/Person";
import React from "react";
import { Menu } from "./Menu";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-9">
        <Menu />

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
