"use client";
import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { PanelItems } from "./PanelItems";
import { postRrhh, rutaRrhh } from "@/server/utils";
import { Concepto, Planilla, PlanillaTrabajador } from "@/server/models/rrhh";
import { PanelTrabajador } from "./PanelTrabajador";

export default function Post({ params }: { params: any }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { idplanilla } = params;

  const [dataPersona, setDataPersona] = useState<any>({
    idplanilla: idplanilla,
    idpersona: 0,
    idcorrtrab: 0,
    nombres: "",
  });

  const [dataInit, setDataInit] = useState<{
    dataPlanilla: Planilla | null;
    planillatrabajador: PlanillaTrabajador[] | null;
  }>({ dataPlanilla: null, planillatrabajador: null });
  const { dataPlanilla, planillatrabajador } = dataInit;

  const onSearchPlanilla = (value: number) => {
    postRrhh(
      rutaRrhh.search_one_planilla,
      { id_planilla: idplanilla },
      (v: any, fetchData: any) => {
        if (v.ok) {
          console.log("fetchData", fetchData);
          setDataInit({
            dataPlanilla: fetchData.dataPlanilla,
            planillatrabajador: fetchData.planillatrabajador,
          });
        } else {
          console.log("fetchData", fetchData);
        }
      }
    );
  };

  useEffect(() => {
    onSearchPlanilla(idplanilla);
  }, []);

  const onDetalle = (
    idpersona: number,
    idcorrtrab: number,
    nombres: string
  ) => {
    setDataPersona({ idpersona, idcorrtrab, nombres, idplanilla });

    setSelectedIndex(1);
  };

  const [panelClick, setPanelClick] = useState(null);

  if (!dataPlanilla) return <div className="text-black">Cargando...</div>;
  return (
    <div className="text-black">
      <div>
        <h1 className="text-3xl text-secondary mb-4">Detalle Planilla</h1>
      </div>
      <div className="flex items-center letterTableHeader mb-4 ">
        <div className=" flex flex-col w-[200px]">
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[100px] justify-end ">Año:</p>
            <p className="flex-grow">{dataPlanilla.id_anio}</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[100px] justify-end ">Mes:</p>
            <p className="flex-grow">{dataPlanilla.mes?.nomb_mes}</p>
          </div>
        </div>
        <div className=" flex flex-col w-[400px]">
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[200px] justify-end ">Tipo Planilla:</p>
            <p className="flex-grow">
              {dataPlanilla.planillatipo?.nomb_tipo_pla}
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[200px] justify-end ">Tipo Trabajador:</p>
            <p className="flex-grow">
              {dataPlanilla.trabajadortipo?.desc_tipo_trabajador}
            </p>
          </div>
        </div>
        <div className=" flex flex-col w-[300px]">
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[100px] justify-end ">Numero de Planilla:</p>
            <p className="flex-grow">{dataPlanilla.num_planilla}</p>
          </div>
        </div>
      </div>
      <div>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex bg-gray-800 rounded-t-lg">
            <Tab className="px-6 py-3 mx-2 text-gray-300 hover:bg-gray-700 rounded-t-lg">
              Resumen
            </Tab>
            <Tab className="px-6 py-3 mx-2 text-gray-300 hover:bg-gray-700 rounded-t-lg">
              Items
            </Tab>
            <Tab className="px-6 py-3 mx-2 text-gray-300 hover:bg-gray-700 rounded-t-lg">
              Trabajadores
            </Tab>
          </Tab.List>
          <Tab.Panels className="bg-white rounded-b-lg">
            <Tab.Panel className="p-4">
              <PanelTrabajador
                storeTrabajador={planillatrabajador}
                onDetalle={onDetalle}
                idplanilla={idplanilla}
              />
            </Tab.Panel>
            <Tab.Panel className="p-4">
              <PanelItems dataPersona={dataPersona} />
            </Tab.Panel>
            <Tab.Panel className="p-4">
              {/* <ModuleTrabajadorSearch  /> */}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
