// import { corePost, postServerCore2 } from "@/api/core/corePost";
// import { Persona } from "@/interfaces/core";

import { Trabajador } from "@/server/models/rrhh";
import { postCore, postRrhh } from "@/server/utils";

import { useState } from "react";

export const handleSearchTrabajador = () => {
  const [dataStore, setDataStore] = useState<{
    store: Trabajador[];
    storeTable: any[];
  }>({ store: [], storeTable: dataTable }); // Update initial state to an empty array
  const { store, storeTable } = dataStore;
  const fetchData = async (formikRef: any) => {
    try {
      await postRrhh(
        "trabajador/search",
        {
          nro_doc_per: formikRef.nro_doc_per ? formikRef.nro_doc_per : "",
          ape_pat_per: formikRef.ape_pat_per ? formikRef.ape_pat_per : "",
          ape_mat_per: formikRef.ape_mat_per ? formikRef.ape_mat_per : "",
          nomb_per: formikRef.nomb_per ? formikRef.nomb_per : "",
          cod_trab: formikRef.cod_trab ? formikRef.cod_trab : "",
        },
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

export const controllerFormulario = (idpersona: any, idcorrtrab: any) => {
  const [dataControler, setDataControler] = useState<{ [key: string]: any }>(
    {}
  );

  const [dataPersona, setDataPersona] = useState<{ [key: string]: any }>([]);

  const fetchDataEntidad = async () => {
    try {
      await postCore(
        "mantenimiento/search-list",
        {
          entidad:
            "BANCO,AFP-ESTADO,AFP,CARGO-BAJA,COND-LABORAL,ESTADOS,REGIMEN-SALUD,REGIMEN-PENSION,SIT-EDUCATIVA" +
            "GRADO-INSTRUCCION,GRADO-TIPO,GRUPO-SANGUINEO,INST-EDUCATIVA,NIVEL-TRABAJADOR,PROCESO-SELECCION,PROFESION",
        },
        (v: any, l: any) => {
          if (v.ok) setDataControler(transformarJson(l));
        }
      );
      await postCore("persona/search", {}, (v: any, fetchedData: any) => {
        if (v.ok) {
          setDataPersona(fetchedData); // Update the state with fetched data
        } else {
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const userForms = userFormsData;

  return {
    dataControler,
    fetchDataEntidad,
    setDataControler,
    userForms,
    dataPersona,
  };
};

const dataTable = [
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
    id: "persona.ape_pat_per",
    name: "Apellido Paterno",
    classh: "",
    classr: "text-left",
  },
  {
    id: "persona.ape_mat_per",
    name: "Apellido Materno",
    classh: "",
    classr: "",
  },
  {
    id: "persona.nomb_per",
    name: "Nombre",
    classh: "",
    classr: "",
  },
  {
    id: "list_id_regimen_pension.desc_lista",
    name: "Regimen Pension",
    classh: "",
    classr: "",
  },
  {
    id: "list_id_regimen_pension_estado.desc_lista",
    name: "Pension Estado",
    classh: "",
    classr: "",
  },
  {
    id: "list_id_regimen_salud.desc_lista",
    name: "Regimen Salud",
    classh: "",
    classr: "",
  },
  {
    id: "list_id_tipo_cuent_banco.desc_lista",
    name: "Tipo Cuenta Banco",
    classh: "",
    classr: "",
  },
];

const userFormsData = {
  cod_trab: {
    name: "cod_trab",
    placeholder: "codigo trabajador",
    type: "text",
  },
  cuspp: {
    name: "cuspp",
    placeholder: "CUSPP",
    type: "text",
  },
  estado_trabajador: {
    name: "estado_trabajador",
    placeholder: "Estado",
    type: "number",
  },
  tipo_pago: {
    name: "tipo_pago",
    placeholder: "Tipo de Pago",
    type: "text",
  },
  sujeto_a_regimen: {
    name: "sujeto_a_regimen",
    placeholder: "Sujeto a Regimen",
    type: "text",
  },
  situacion: {
    name: "situacion",
    placeholder: "Situacion",
    type: "text",
  },
  id_regimen_pension: {
    name: "id_regimen_pension",
    placeholder: "Regimen Pension",
    type: "text",
  },
  id_regimen_pension_estado: {
    name: "id_regimen_pension_estado",
    placeholder: "Regimen Pension Estado",
    type: "text",
  },
  id_regimen_salud: {
    name: "id_regimen_salud",
    placeholder: "Regimen Salud",
    type: "text",
  },
  id_situacion_educativa: {
    name: "id_situacion_educativa",
    placeholder: "Situacion Educativa",
    type: "text",
  },
  id_tipo_cuent_banco: {
    name: "id_tipo_cuent_banco",
    placeholder: "Tipo Cuenta Banco",
    type: "text",
  },
  id_tipo_trabajador: {
    name: "id_tipo_trabajador",
    placeholder: "Tipo Trabajador",
    type: "text",
  },
  num_regimen_salud: {
    name: "num_regimen_salud",
    placeholder: "Numero Regimen Salud",
    type: "text",
  },
  num_cuenta_banco_sueldo: {
    name: "num_cuenta_banco_sueldo",
    placeholder: "Numero Cuenta Banco Sueldo",
    type: "text",
  },
  num_cuenta_banco_sueldo_cci: {
    name: "num_cuenta_banco_sueldo_cci",
    placeholder: "Numero Cuenta Banco Sueldo CCI",
    type: "text",
  },
  // aud_fech_crea: {
  //   name: "aud_fech_crea",
  //   placeholder: "Nombre",
  //   type: "text",
  // },
  // est_civil_per: {
  //   name: "est_civil_per",
  //   placeholder: "Nombre",
  //   type: "text",
  // },
  // id_ubigeo_nac: {
  //   name: "id_ubigeo_nac",
  //   placeholder: "Nombre",
  //   type: "text",
  // },
  // nro_ruc: {
  //   name: "nro_ruc",
  //   placeholder: "RUC",
  //   type: "text",
  // },
};

const transformarJson = (jsonData: { [key: string]: any }) => {
  const resultado: { [key: string]: any } = {};
  for (const entidad in jsonData) {
    if (jsonData.hasOwnProperty(entidad)) {
      resultado[entidad] = jsonData[entidad].map((item: any) => ({
        id: item.id_lista,
        name: item.desc_lista,
      }));
    }
  }
  return resultado;
};
