"use client";
import { ModuleTrabajadorSearch } from "@/components/trabajador/ModuleTrabajadorSearch";
import { PlanillaTrabajador } from "@/server/models/rrhh";
import { postRrhh, rutaRrhh } from "@/server/utils";
import { ModalNext } from "@/shared/Components/ModalNext";
import { swallMsg, swallMsgError } from "@/shared/sweetalert2/swallError";
import React, { useState } from "react";
import { FcDeleteDatabase, FcFullTrash, FcPlus, FcSms } from "react-icons/fc";
export const PanelTrabajador = ({
  storeTrabajador,
  onDetalle,
  idplanilla,
}: {
  storeTrabajador: PlanillaTrabajador[] | null;
  onDetalle: (idpersona: number, idcorrtrab: number, nombres: string) => void;
  idplanilla: number;
}) => {
  const dataTable = [
    { id: "trabajador.cod_trab", name: "Código" },
    { id: "full_name", name: "Nombres" },
    { id: "list_id_regimen_pension.desc_lista", name: "Regimen pensión" },
    { id: "list_id_regimen_pension_estado.desc_lista", name: "Estado pensión" },
    { id: "list_id_regimen_salud.desc_lista", name: "Regimen salud" },
  ];

  const [employeeData, setEmployeeData] = useState(storeTrabajador);
  // let employeeData = storeTrabajador;
  console.log("storeTrabajador", storeTrabajador);

  const clickEmployee = (
    idpersona: number,
    idcorrtrab: number,
    nombres: string
  ) => {
    onDetalle(idpersona, idcorrtrab, nombres);
  };
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
  let filaAlternada = false;
  const [filaClicada, setFilaClicada] = useState<null | string>(null);

  const [newEmployee, setNewEmployee] = useState(false);
  const openNewEmployee = () => setNewEmployee(true);
  const closeNewEmployee = () => setNewEmployee(false);
  const onNewEmployee = (data: []) => {
    postRrhh(rutaRrhh.add_employee, { data }, (v: any, fetchData: any) => {
      if (v.ok) {
        setEmployeeData(fetchData);
      } else {
        console.log("fetchData", fetchData);
        swallMsgError(fetchData.message);
      }
    });
  };

  return (
    <>
      <div className="flex w-full min-w-full">
        <div className="w-full">
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
                  >
                    {item.name}{" "}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="letterTable">
              {employeeData?.map((item: any) => {
                const claseFila = filaAlternada
                  ? "bg-[#F8FAFC] hover:bg-[#f5f2fd]"
                  : "hover:bg-[#f5f2fd]";
                const filaClicadaClass =
                  filaClicada === `${item.id_persona}-${item.id_corr_trab}`
                    ? "bg-[#edebf5]"
                    : claseFila;
                filaAlternada = !filaAlternada;
                return (
                  <tr
                    key={`${item.id_persona}-${item.id_corr_trab}`}
                    onClick={() => {
                      setFilaClicada(`${item.id_persona}-${item.id_corr_trab}`);
                    }}
                    onDoubleClick={() =>
                      clickEmployee(
                        item.id_persona,
                        item.id_corr_trab,
                        `${item.persona.ape_pat_per} ${item.persona.ape_mat_per} ${item.persona.nomb_per} `
                      )
                    }
                    className={filaClicadaClass}
                  >
                    {dataTable.map((key: any) => (
                      <td
                        key={key.id}
                        className={`${key.classr} py-2 px-4 border-b`}
                      >
                        {valueData(item, key.id, key.render)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-12 items-center gap-y-3 ">
          <div className="">
            <button
              onClick={openNewEmployee}
              className=" text-3xl hover:bg-slate-200 rounded-full p-1"
            >
              <FcPlus />
            </button>
          </div>
          <div className=" ">
            <button
              onClick={() => {
                if (!filaClicada) return swallMsg("Seleccione un trabajador");
              }}
              className=" text-3xl hover:bg-slate-200 rounded-full p-1"
            >
              <FcFullTrash />
            </button>
          </div>
          <div className=" ">
            <button className=" text-3xl hover:bg-slate-200 rounded-full p-1">
              <FcSms />
            </button>
          </div>
        </div>
      </div>
      <ModalNext open={newEmployee} handleClose={closeNewEmployee}>
        <ModuleTrabajadorSearch
          handleClose={closeNewEmployee}
          onNewEmployee={onNewEmployee}
          idplanilla={idplanilla}
        />
      </ModalNext>
    </>
  );
};
