"use client";
import { CircleInit } from "@/shared/icons/CircleInit";
import Reach from "react";

export const Menu = () => {
  return (
    <div className="col-span-1 bg-[#1E293B]">
      <div className="m-4">
        <CircleInit />
      </div>
      <p className="text_center">Sistema RRHH</p>

      {/* Agregar más opciones de menú aquí */}
      <MenuItem text="Opción 1" />
      <MenuItem text="Opción 2" />
      <MenuItem text="Opción 3" />
      <MenuItem text="Opción 4" />
      <MenuItem text="Opción 5" />
      <MenuItem text="Opción 6" />
      <MenuItem text="Opción 7" />
    </div>
  );
};

// Componente de menú para reutilizar el código
const MenuItem = ({ text }: any) => {
  return (
    <div className="m-4">
      {/* Puedes personalizar el icono aquí si es necesario */}
      <CircleInit />
      <p className="text_center">{text}</p>
    </div>
  );
};
