import { Planilla } from "@/server/models/rrhh";
import { postRrhh } from "@/server/utils";
import { useState } from "react";
import { rutaRrhh } from "../../server/utils/rutaRrhh";

export const handleSearchPlanilla = () => {
  const [dataStore, setDataStore] = useState<{
    store: Planilla[];
    storeTable: any[];
  }>({ store: [], storeTable: dataTable }); // Update initial state to an empty array
  const { store, storeTable } = dataStore;
  const fetchData = async (formikRef: any) => {
    try {
      await postRrhh(
        rutaRrhh.search_list_planilla,
        {},
        (v: any, fetchedData: any) => {
          if (v.ok) {
            // console.log("fetchedData", fetchedData);
            setDataStore({ ...dataStore, store: fetchedData }); // Update the state with fetched data
          }
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return { store, storeTable, fetchData };
};
const dataTable = [
  {
    id: "id_anio",
    name: "Año",
    classh: "",
    classr: "",
  },
  {
    id: "id_mes",
    name: "Mes",
    classh: "",
    classr: "",
  },

  {
    id: "planillatipo.nomb_tipo_pla",
    name: "Tipo Planilla",
    classh: "",
  },
  {
    id: "trabajadortipo.desc_tipo_trabajador",
    name: "Tipo Trabajador",
    classh: "",
    classr: "text-left",
  },

  {
    id: "num_planilla",
    name: "Número Planilla",
    classh: "",
    classr: "",
  },
  {
    id: "sys_fech_registro",
    name: "Fecha Registro",
    classh: "",
    classr: "",
  },
  {
    id: "est_planilla",
    name: "Estado Planilla",
    classh: "",
    classr: "",
    render: function (objeto: any) {
      return objeto == "1" ? "ABIERO" : "2" ? "CERRADO" : "ANULADO";
    },
  },
];
