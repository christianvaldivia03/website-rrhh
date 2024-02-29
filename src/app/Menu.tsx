"use client";
import { CircleInit } from "@/shared/icons/CircleInit";
import Link from "next/link";
import Reach from "react";
import { ButtonNext } from "@/shared/Components/ButtonNext";

export const Menu = () => {
  return (
    <div className="col-span-1 bg-[#1E293B]">
      {/* Agregar más opciones de menú aquí */}

      <div>
        <Link href="/persona">
          <ButtonNext
            classNameBotton="w-full my-8"
            type="text"
            valor="Persona"
          />
        </Link>
      </div>
      <div>
        <Link href="/trabajador">
          <ButtonNext
            classNameBotton="w-full my-8"
            type="text"
            valor="Trabajador"
          />
        </Link>
      </div>
      <div>
        <Link href="/planilla">
          <ButtonNext
            classNameBotton="w-full my-8"
            type="text"
            valor="Planilla"
          />
        </Link>
      </div>
    </div>
  );
};
