"use client";
import { CircleInit } from "@/shared/icons/CircleInit";
import { Inter } from "next/font/google";
import React from "react";
import { Menu } from "../Menu";

const inter = Inter({ subsets: ["latin"] });
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} min-h-screen flex custom-scrollbar `}>
      {" "}
      <div className="flex flex-col  w-40 bg-gray-800">
        <header className="p-4 fixed top-0 w-40 min-h-screen max-h-full overflow-y-auto">
          <div className="col-span-1 bg-[#1E293B]">
            <div className="m-4">
              <CircleInit />
            </div>
            <p className="text-center text-blanco">Sistema RRHH</p>
          </div>
          <Menu />
        </header>
      </div>
      <main className="flex-1 text-white p-4">{children}</main>
      <footer></footer>
    </div>
  );
}
