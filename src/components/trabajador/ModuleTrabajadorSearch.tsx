"use client";
import React, { useEffect, useState } from "react";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import { SearchTrabajador } from "./SearchTrabajador";
import { handleSearchTrabajador } from "./trabajador.controller";

export const ModuleTrabajadorSearch = ({
  onNewEmployee,
  idplanilla,
  handleClose,
}: {
  onNewEmployee: (data: any) => void;
  idplanilla: number;
  handleClose: () => void;
}) => {
  const { store, fetchData } = handleSearchTrabajador();
  useEffect(() => {
    fetchData({});
  }, []);

  let filaAlternada = false;
  const [filaClicada, setFilaClicada] = useState("");
  const [page, setPage] = useState({
    currentPage: 1,
  });
  const { currentPage } = page;

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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
  const onSearch = (value: any) => {
    fetchData(value);
  };

  const currentData = store.slice(startIndex, endIndex);

  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const handleRowClick = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className=" bg-blanco w-[1000px] h-[700px] overflow-auto m-auto px-12 py-8 ">
      <p className="text-2xl mb-2">Busqueda de trabajador</p>
      <div className="mb-2">
        <SearchTrabajador onSearch={onSearch} />
      </div>
      <div>
        <div className="table w-full">
          <table className="min-w-full bg-white border border-gray-300 letterTable">
            <thead className="letterTableHeader  bg-[#F8FAFC]">
              <tr className="">
                {dataTableSearch.map((item: any) => (
                  <td
                    key={item.id}
                    className={
                      item.classh +
                      "py-3 px-4 border-b cursor-pointer text-center"
                    }
                  >
                    {item.name}{" "}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="letterTable">
              {currentData.map((item: any) => {
                const claseFila = filaAlternada
                  ? "bg-[#F8FAFC] hover:bg-[#f5f2fd]"
                  : "hover:bg-[#f5f2fd]";
                const filaClicadaClass =
                  filaClicada === `${item.id_persona}-${item.id_corr_trab}`
                    ? "bg-[#edebf5]"
                    : claseFila;
                filaAlternada = !filaAlternada;
                const isSelected = selectedRows.includes(
                  `${item.id_persona}-${item.id_corr_trab}`
                );
                return (
                  <tr
                    key={`${item.id_persona}-${item.id_corr_trab}`}
                    className={`${filaClicadaClass} cursor-pointer   `}
                    onClick={() => {
                      setFilaClicada(`${item.id_persona}-${item.id_corr_trab}`);
                    }}
                  >
                    {dataTableSearch.map((key: any) => (
                      <td
                        key={key.id}
                        className={`${key.classr} py-2 px-4 border-b`}
                      >
                        {valueData(item, key.id, key.render)}
                      </td>
                    ))}
                    <td key={"input"} className="py-2 px-4 border-b">
                      <input
                        checked={isSelected}
                        type="checkbox"
                        onChange={() => {
                          handleRowClick(
                            `${item.id_persona}-${item.id_corr_trab}`
                          );
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-start gap-x-4 items-center mt-4">
            <ButtonNext
              onClick={() => setPage({ ...page, currentPage: currentPage - 1 })}
              className="flex justify-end "
              valor="Anterior"
              classNameBotton="bg-primary text-white letter rounded-sm px-4 py-2 my-2"
            />
            <span className="text-black">Página {currentPage}</span>
            <ButtonNext
              onClick={() => setPage({ ...page, currentPage: currentPage + 1 })}
              className="flex justify-end "
              valor="Siguiente"
              classNameBotton="bg-primary text-white letter rounded-sm px-4 py-2 my-2"
            />
            <ButtonNext
              onClick={() => {
                if (selectedRows.length > 0) {
                  onNewEmployee(
                    selectedRows.map((row) => {
                      const [id_persona, id_corr_trab] = row.split("-");
                      return {
                        id_planilla: idplanilla,
                        id_persona,
                        id_corr_trab,
                      };
                    })
                  );
                  handleClose();
                }
              }}
              className="flex justify-end "
              valor="Agregar Trabajador(es)"
              classNameBotton="bg-secondary text-white letter rounded-sm px-4 py-2 my-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const dataTableSearch = [
  {
    id: "persona.nro_doc_per",
    name: "Nro. Doc.",
    classh: "",
  },
  {
    id: "cod_trab",
    name: "Código",
    classh: "",
  },
  {
    id: "full_name",
    name: "Nombres",
    classh: "",
    classr: "w-[200px] text-left",
  },
  {
    id: "list_tipo_trabajador.desc_tipo_trabajador",
    name: "Tipo Trabajador",
    classh: "",
    classr: "text-left",
  },
];
