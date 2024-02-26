"use client";
import { EditIcon } from "@/shared/icons/EditIcon";
import { TrashIcon } from "@/shared/icons/TrashIcon";
import React, { useState } from "react";
import { on } from "events";
import { ButtonNext } from "@/shared/Components/ButtonNext";

export const Tabla = ({
  dataStore,
  dataTable,
  onUpdate,
}: {
  dataStore: any[];
  dataTable: any[];
  onUpdate: any;
}) => {
  const [page, setPage] = useState({
    currentPage: 1,
    sortColumn: null,
    sortOrder: "asc",
  });
  const { currentPage, sortColumn, sortOrder } = page;

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleSort = (column: any) => {
    if (column === sortColumn) {
      // Si hacemos clic en la misma columna, cambiamos el orden
      setPage({ ...page, sortOrder: sortOrder === "asc" ? "desc" : "asc" });
    } else {
      // Si hacemos clic en una nueva columna, la establecemos como columna de ordenación y el orden como ascendente
      setPage({ ...page, sortColumn: column, sortOrder: "asc" });
    }
  };

  let filaAlternada = false;
  const [filaClicada, setFilaClicada] = useState(null);

  // Función para ordenar los datos
  const sortedData = () => {
    if (sortColumn) {
      return dataStore.sort((a, b) => {
        const aValue: string | number = a[sortColumn];
        const bValue: string | number = b[sortColumn];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortOrder === "asc"
            ? (aValue as string).localeCompare(bValue as string)
            : (bValue as string).localeCompare(aValue as string);
        } else {
          return sortOrder === "asc"
            ? (aValue as number) - (bValue as number)
            : (bValue as number) - (aValue as number);
        }
      });
    }
    return dataStore;
  };

  const currentData = sortedData().slice(startIndex, endIndex);

  function valueData(objeto: any, ruta: any, fun: any) {
    const partes = ruta.split(".");
    try {
      const valor = partes.reduce((obj: any, key: any) => obj[key], objeto);
      if (fun) {
        return fun(valor);
      }
      return valor;
    } catch (error) {
      return "";
    }
  }

  return (
    <>
      <div className="table">
        <table className="min-w-full bg-white border border-gray-300 letterTable">
          <thead className="letterTableHeader  bg-[#F8FAFC]">
            <tr className="">
              {dataTable.map((item: any) => (
                <td
                  key={item.id}
                  className={
                    item.classh +
                    "py-3 px-4 border-b cursor-pointer text-center"
                  }
                  onClick={() => handleSort(item.id)}
                >
                  {item.name}{" "}
                  {sortColumn === item.id && sortOrder === "asc" && "↑"}{" "}
                  {sortColumn === item.id && sortOrder === "desc" && "↓"}
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="letterTable">
            {currentData.map((item: any) => {
              const claseFila = filaAlternada
                ? "bg-[#F8FAFC] hover:bg-[#f5f2fd]"
                : "";
              const filaClicadaClass =
                filaClicada === item.id_persona ? "bg-[#edebf5]" : claseFila;
              filaAlternada = !filaAlternada;
              return (
                <tr
                  key={item.id_persona}
                  className={`${filaClicadaClass} cursor-pointer   `}
                  onClick={() => {
                    setFilaClicada(item.id_persona);
                  }}
                  onDoubleClick={() => {
                    onUpdate(item);
                  }}
                >
                  {dataTable.map((key: any) => (
                    <td
                      key={key.id}
                      className={`${key.classr} py-2 px-4 border-b  `}
                    >
                      {valueData(item, key.id, key.render)}
                    </td>
                  ))}
                  <td className="py-1 px-4 border-b">
                    <button
                      className="  rounded-full hover:bg-gray-200"
                      onClick={() => {
                        onUpdate(item);
                      }}
                    >
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between items-center">
          <ButtonNext
            onClick={() => setPage({ ...page, currentPage: currentPage - 1 })}
            className="flex justify-end "
            valor="Anterior"
            classNameBotton="bg-primary text-white letter rounded-sm px-4 py-2 mt-4"
          />
          <span className="text-black">Página {currentPage}</span>
          <ButtonNext
            onClick={() => setPage({ ...page, currentPage: currentPage + 1 })}
            className="flex justify-end "
            valor="Siguiente"
            classNameBotton="bg-primary text-white letter rounded-sm px-4 py-2 mt-4"
          />
        </div>
      </div>
    </>
  );
};
