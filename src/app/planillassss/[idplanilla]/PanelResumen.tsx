import { SumSign } from "@/shared/icons/SumSign";
import React from "react";

export const PanelResumen = () => {
  const dataTable = [
    {
      id: "id_persona",
      name: "Id Persona",
    },
    {
      id: "id_corr_trab",
      name: "Id Corr Trab",
    },
    { id: "nombres", name: "Nombres" },
    { id: "apellidos", name: "Apellidos" },
    { id: "cargo", name: "Cargo" },
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

  const clickEmployee = (id: number, idcorrtrab: number) => {
    // console.log("clickEmployee", id);
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
            {currentData.map((item: any) => (
              <tr
                key={`${item.id_persona}-${item.id_corr_trab}`}
                onClick={() => clickEmployee(item.id, item.id_corr_trab)}
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
