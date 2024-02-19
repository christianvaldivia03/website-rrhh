"use client";
import { Concepto } from "@/server/models/rrhh";
import { postRrhh, rutaRrhh } from "@/server/utils";
import { SumSign } from "@/shared/icons/SumSign";
import React, { useEffect, useState } from "react";

export const PanelItems = ({
  dataPersona,
}: {
  dataPersona: {
    idplanilla: number;
    idpersona: number;
    idcorrtrab: number;
    nombres: string;
  };
}) => {
  const [dataConcepto, setDataConcepto] = useState<{
    remuneracion: Concepto[];
    descuento: Concepto[];
    aporte: Concepto[];
  }>({
    remuneracion: [],
    descuento: [],
    aporte: [],
  });

  const { idplanilla, idpersona, idcorrtrab, nombres } = dataPersona;
  const onDataConcepto = () => {
    postRrhh(
      rutaRrhh.search_concepto_planilla_trabajador,
      {
        id_planilla: idplanilla,
        id_persona: idpersona,
        id_corr_trab: idcorrtrab,
      },
      (v: any, fetchData: any) => {
        if (v.ok) {
          setDataConcepto(fetchData);
        }
      }
    );
  };

  useEffect(() => {
    onDataConcepto();
  }, []);

  const { remuneracion, descuento, aporte } = dataConcepto;

  const dataTable = [
    {
      id: "concepto.cod_conc",
      name: "Codigo",
    },
    {
      id: "concepto.nomb_conc",
      name: "Nombre",
    },
    {
      id: "monto_conc",
      name: "Monto",
    },
    // {
    //   id: "id_corr_trab",
    //   name: "Monto",
    // },
  ];

  const currentData = [
    {
      id_persona: "1",
      id_corr_trab: "1",
      nombres: "Juan",
      apellidos: "Perez",
      cargo: "Gerente",
    },
    {
      id_persona: "2",
      id_corr_trab: "2",
      nombres: "Maria",
      apellidos: "Perez",
      cargo: "Gerente",
    },
  ];
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

  const clickEmployee = (id: number, idcorrtrab: number) => {
    // console.log("clickEmployee", id);
  };

  return (
    <div>
      <div className="flex items-center gap-x-3">
        <p>Persona: </p>
        <p>{nombres}</p>
      </div>
      <div>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <p className="text-center">Remuneración</p>
            <div className="flex w-full min-w-full">
              <div className="w-full">
                <table
                  key={"remuneracion"}
                  className="min-w-full bg-white border border-gray-300 letterTable"
                >
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
                    {remuneracion.map((item: any) => (
                      <tr
                        key={`${item.id_concepto}`}
                        // onClick={() =>
                        //   // clickEmployee(item.id, item.id_corr_trab)
                        // }
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
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col w-12 items-center gap-y-3 ">
                <div>
                  <button className="bg-primary text-white p-2 rounded-md">
                    <SumSign />
                  </button>
                </div>

                <div>
                  <button className="bg-primary text-white p-2 rounded-md">
                    <SumSign />
                  </button>
                </div>

                <div>
                  <button className="bg-primary text-white p-2 rounded-md">
                    <SumSign />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            {" "}
            <p className="text-center">Descuentos</p>
            <div className="flex w-full min-w-full">
              <div className="w-full">
                <table
                  key={"descuento"}
                  className="min-w-full bg-white border border-gray-300 letterTable"
                >
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
                    {currentData.map((item: any) => (
                      <tr
                        key={`${item.id_persona}-${item.id_corr_trab}`}
                        onClick={() =>
                          clickEmployee(item.id, item.id_corr_trab)
                        }
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
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col w-12 items-center gap-y-3 ">
                <div>
                  <button className="bg-primary text-white p-2 rounded-md">
                    <SumSign />
                  </button>
                </div>

                <div>
                  <button className="bg-primary text-white p-2 rounded-md">
                    <SumSign />
                  </button>
                </div>

                <div>
                  <button className="bg-primary text-white p-2 rounded-md">
                    <SumSign />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            {" "}
            <p className="text-center">Aportes</p>
            <div className="flex w-full min-w-full">
              <div className="w-full">
                <table
                  key={"aporte"}
                  className="min-w-full bg-white border border-gray-300 letterTable"
                >
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
                    {currentData.map((item: any) => (
                      <tr
                        key={`${item.id_persona}-${item.id_corr_trab}`}
                        onClick={() =>
                          clickEmployee(item.id, item.id_corr_trab)
                        }
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
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col w-12 items-center gap-y-3 ">
                <div>
                  <button className="bg-primary text-white p-2 rounded-md">
                    <SumSign />
                  </button>
                </div>

                <div>
                  <button className="bg-primary text-white p-2 rounded-md">
                    <SumSign />
                  </button>
                </div>

                <div>
                  <button className="bg-primary text-white p-2 rounded-md">
                    <SumSign />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
