import { corePost } from "@/api/core/corePost";
import { Persona } from "@/interfaces/core";
import { useRef, useState } from "react";

// const formikRef = useRef<any>();

export const handleSearchPersona = () => {
  const [dataStore, setDataStore] = useState<{
    store: Persona[];
    storeTable: any[];
  }>({ store: [], storeTable: dataTable }); // Update initial state to an empty array

  const { store, storeTable } = dataStore;

  const fetchData = async (formikRef: any) => {
    try {
      const fetchedData: Persona[] = await corePost(
        "http://localhost:3003/api/v1/core/persona/search",
        {
          nro_doc_per: formikRef.nro_doc_per ? formikRef.nro_doc_per : "",
          ape_pat_per: formikRef.ape_pat_per ? formikRef.ape_pat_per : "",
          ape_mat_per: formikRef.ape_mat_per ? formikRef.ape_mat_per : "",
          nomb_per: formikRef.nomb_per ? formikRef.nomb_per : "",
        }
      );
      setDataStore({ ...dataStore, store: fetchedData }); // Update the state with fetched data
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
