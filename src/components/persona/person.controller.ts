// import { corePost, postServerCore2 } from "@/api/core/corePost";
// import { Persona } from "@/interfaces/core";
import { Persona } from "@/server/models/core";
import { postCore } from "@/server/utils/serverCore";
import { useState } from "react";

export const handleSearchPersona = () => {
  const [dataStore, setDataStore] = useState<{
    store: Persona[];
    storeTable: any[];
  }>({ store: [], storeTable: dataTable }); // Update initial state to an empty array

  const { store, storeTable } = dataStore;

  const fetchData = async (formikRef: any) => {
    try {
      await postCore(
        "persona/search",
        {
          nro_doc_per: formikRef.nro_doc_per ? formikRef.nro_doc_per : "",
          ape_pat_per: formikRef.ape_pat_per ? formikRef.ape_pat_per : "",
          ape_mat_per: formikRef.ape_mat_per ? formikRef.ape_mat_per : "",
          nomb_per: formikRef.nomb_per ? formikRef.nomb_per : "",
        },
        (v: any, fetchedData: any) => {
          if (v.ok) {
            console.log(fetchedData);
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
    id: "tipo_per",
    name: "Tipo",
    classh: "",
    classr: "",
    render: function (objeto: any) {
      return objeto == "N" ? "Natural" : "Juridica";
    },
  },
  {
    id: "nro_doc_per",
    name: "Nro. Doc.",
    classh: "",
  },
  {
    id: "ape_pat_per",
    name: "Apellido Paterno",
    classh: "",
    classr: "text-left",
  },
  {
    id: "ape_mat_per",
    name: "Apellido Materno",
    classh: "",
    classr: "",
  },
  {
    id: "nomb_per",
    name: "Nombre",
    classh: "",
    classr: "",
  },
  {
    id: "list_id_pais_nac.desc_lista",
    name: "Pais",
    classh: "",
    classr: "",
  },
  {
    id: "direc_per",
    name: "Dirección",
    classh: "",
    classr: "",
  },
];
