"use client";
import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { PanelResumen } from "./PanelResumen";
import { PanelItems } from "./PanelItems";
import { postRrhh, rutaRrhh } from "@/server/utils";
import { Concepto, Planilla } from "@/server/models/rrhh";
import { PanelTrabajador } from "./PanelTrabajador";
import { on } from "events";
import { id } from "date-fns/locale";

export default function Post({ params }: { params: any }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { idplanilla } = params;

  const [dataPersona, setDataPersona] = useState<any>({
    idplanilla: idplanilla,
    idpersona: 0,
    idcorrtrab: 0,
    nombres: "",
  });

  //   console.log("idplanilla", idplanilla);
  const [dataInit, setDataInit] = useState<Planilla | null>(null);

  const onSearchPlanilla = (value: number) => {
    postRrhh(
      rutaRrhh.search_one_planilla,
      { id_planilla: idplanilla },
      (v: any, fetchData: any) => {
        if (v.ok) {
          setDataInit(fetchData);
        }
      }
    );
  };

  // const onDataConcepto = () => {
  //   postRrhh(
  //     rutaRrhh.search_concepto_planilla_trabajador,
  //     {
  //       id_planilla: idplanilla,
  //       id_persona: idpersona,
  //       id_corr_trab: idcorrtrab,
  //     },
  //     (v: any, fetchData: any) => {
  //       if (v.ok) {
  //         setDataConcepto(fetchData);
  //       }
  //     }
  //   );
  // };

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

  if (!dataInit) return <div>Cargando...</div>;
  return (
    <div className="text-black">
      <div className="bg-primary">mi id es : {idplanilla}</div>
      <div>
        <h1 className="text-3xl text-secondary">Planillas del sistema</h1>
      </div>
      <div className="flex items-center ">
        <div className=" flex flex-col w-[300px]">
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[100px] justify-end ">Año:</p>
            <p className="flex-grow">{dataInit.id_anio}</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[100px] justify-end ">Mes:</p>
            <p className="flex-grow">{dataInit.mes?.nomb_mes}</p>
          </div>
        </div>
        <div className=" flex flex-col w-[300px]">
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[100px] justify-end ">Tipo Planilla:</p>
            <p className="flex-grow">{dataInit.planillatipo?.nomb_tipo_pla}</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[100px] justify-end ">Tipo Trabajador:</p>
            <p className="flex-grow">
              {dataInit.trabajadortipo?.desc_tipo_trabajador}
            </p>
          </div>
        </div>
        <div className=" flex flex-col w-[300px]">
          <div className="flex gap-x-4 items-center">
            <p className=" flex w-[100px] justify-end ">Numero de Planilla:</p>
            <p className="flex-grow">{dataInit.num_planilla}</p>
          </div>
        </div>
      </div>
      <div>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List>
            <Tab>Resumen</Tab>
            <Tab>Items</Tab>
            <Tab>Trabajadores</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <PanelTrabajador
                storeTrabajador={dataInit.planillatrabajador}
                onDetalle={onDetalle}
              />
            </Tab.Panel>
            <Tab.Panel>
              <PanelItems dataPersona={dataPersona} />
            </Tab.Panel>
            <Tab.Panel>
              <p>Resumen</p>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
