import { PlanillaTrabajador } from "@/server/models/rrhh";
import { SumSign } from "@/shared/icons/SumSign";
import React from "react";

export const PanelTrabajador = ({
  storeTrabajador,
  onDetalle,
}: {
  storeTrabajador: PlanillaTrabajador[] | undefined;
  onDetalle: (idpersona: number, idcorrtrab: number, nombres: string) => void;
}) => {
  const dataTable = [
    { id: "trabajador.cod_trab", name: "Código" },
    { id: "persona.ape_pat_per", name: "Apellido Paterno" },
    { id: "persona.ape_mat_per", name: "Apellido Materno" },
    { id: "persona.nomb_per", name: "Nombres" },
    { id: "list_id_regimen_pension.desc_lista", name: "Regimen pensión" },
    { id: "list_id_regimen_pension_estado.desc_lista", name: "Estado pensión" },
    { id: "list_id_regimen_salud.desc_lista", name: "Regimen salud" },
  ];

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
  return (
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
            {storeTrabajador?.map((item: any) => (
              <tr
                key={`${item.id_persona}-${item.id_corr_trab}`}
                onClick={() =>
                  clickEmployee(
                    item.id_persona,
                    item.id_corr_trab,
                    `${item.persona.ape_pat_per} ${item.persona.ape_mat_per} ${item.persona.nomb_per} `
                  )
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
        <div className=" ">
          <button className="bg-primary text-white p-2 rounded-md">
            <SumSign />
          </button>
        </div>
        <div className=" ">
          <button className="bg-primary text-white p-2 rounded-md">
            <SumSign />
          </button>
        </div>
        <div className=" ">
          <button className="bg-primary text-white p-2 rounded-md">
            <SumSign />
          </button>
        </div>
        <div className=" ">
          <button className="bg-primary text-white p-2 rounded-md">
            <SumSign />
          </button>
        </div>
        <div className=" ">
          <button className="bg-primary text-white p-2 rounded-md">
            <SumSign />
          </button>
        </div>
      </div>
    </div>
  );
};
