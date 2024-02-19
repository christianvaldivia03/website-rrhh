"use client";
import { EditIcon } from "@/shared/icons/EditIcon";
import { TrashIcon } from "@/shared/icons/TrashIcon";
import React, { useState } from "react";
import { on } from "events";
import Link from "next/link";

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
            {currentData.map((item: any) => (
              <tr key={`${item.id_planilla}`}>
                {dataTable.map((key: any) => (
                  <td
                    key={key.id}
                    className={`${key.classr} py-2 px-4 border-b`}
                  >
                    {/* {item[key.id]} */}
                    {valueData(item, key.id, key.render)}
                  </td>
                ))}
                <td className="py-1 px-4 border-b">
                  <Link href={`planilla/${item.id_planilla}`} target="_blank">
                    <button
                      onClick={() => {
                        // onUpdate(item);
                      }}
                    >
                      <EditIcon />
                    </button>
                  </Link>
                </td>
                <td className="py-1 px-4 border-b">
                  <a>
                    <TrashIcon />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setPage({ ...page, currentPage: currentPage - 1 })}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Anterior
          </button>
          <span>Página {currentPage}</span>
          <button
            onClick={() => setPage({ ...page, currentPage: currentPage + 1 })}
            disabled={endIndex >= dataStore.length}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
