// import { corePatch, corePost, postServerCore } from "@/api/core/corePost";
import { Persona } from "@/server/models/core/Persona.class";
import { patchCore, postCore } from "@/server/utils";
import { useState } from "react";

export const controllerFormulario = (idpersona: any) => {
  const [dataControler, setDataControler] = useState<{ [key: string]: any }>(
    {}
  );
  const [initialValues, setInitialValues] = useState<{ [key: string]: any }>(
    userFromsValue
  );

  const fetchDataEntidad = async () => {
    try {
      await postCore(
        "mantenimiento/search-list",
        {
          entidad: "DOC-IDENTIDAD,PAIS",
        },
        (v: any, l: any) => {
          if (v.ok) setDataControler(transformarJson(l));
        }
      );

      if (idpersona != null) {
        await postCore(
          "persona/one-search",
          {
            id_persona: idpersona,
          },
          (v: any, l: any) => {
            if (v.ok) {
              setInitialValues(l);
            }
          }
        );
      } else {
        setInitialValues(userFromsValue);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updatePersona = async (values: any, idpersona: any) => {
    const data = new Persona(values);
    const { id_persona, ...rest } = data;
    if (idpersona != null) {
      await patchCore("persona/update", { ...data }, (v: any, l: any) => {
        if (v.ok) {
        } else {
          // console.log(l.message);
        }
      });
    } else {
      await postCore("persona/create", { ...rest }, (v: any, l: any) => {
        if (v.ok) {
        } else {
          // console.log(l.message);
        }
      });
    }
  };

  const userForms = userFormsData;

  return {
    dataControler,
    fetchDataEntidad,
    setDataControler,
    userForms,
    initialValues,
    updatePersona,
    // fetchDataPersona,
  };
};

const userFormsData = {
  id_persona: {
    name: "id_persona",
    placeholder: "Nombre",
    type: "text",
  },
  tipo_per: {
    name: "tipo_per",
    placeholder: "Nombre",
    type: "number",
  },
  tipo_doc_per: {
    name: "tipo_doc_per",
    placeholder: "Nombre",
    type: "text",
  },
  nro_doc_per: {
    name: "nro_doc_per",
    placeholder: "Documento de identidad",
    type: "text",
  },
  ape_pat_per: {
    name: "ape_pat_per",
    placeholder: "Apellido Paterno",
    type: "text",
  },
  ape_mat_per: {
    name: "ape_mat_per",
    placeholder: "Nombre",
    type: "text",
  },
  nomb_per: {
    name: "nomb_per",
    placeholder: "Nombre",
    type: "text",
  },
  direc_per: {
    name: "direc_per",
    placeholder: "Direccion",
    type: "text",
  },
  sex_per: {
    name: "sex_per",
    placeholder: "Sexo",
    type: "text",
  },
  fech_nac_per: {
    name: "fech_nac_per",
    placeholder: "Nombre",
    type: "text",
  },
  id_pais_nac: {
    name: "id_pais_nac",
    placeholder: "Nombre",
    type: "number",
  },
  aud_fech_crea: {
    name: "aud_fech_crea",
    placeholder: "Nombre",
    type: "text",
  },
  est_civil_per: {
    name: "est_civil_per",
    placeholder: "Nombre",
    type: "text",
  },
  id_ubigeo_nac: {
    name: "id_ubigeo_nac",
    placeholder: "Nombre",
    type: "text",
  },
  nro_ruc: {
    name: "nro_ruc",
    placeholder: "RUC",
    type: "text",
  },
};

const userFromsValue = {
  id_persona: "",
  tipo_per: "",
  tipo_doc_per: "",
  nro_doc_per: "",
  ape_pat_per: "",
  ape_mat_per: "",
  nomb_per: "",
  direc_per: "",
  sex_per: "",
  // fech_nac_per: "",
  id_pais_nac: 2087,
  // aud_fech_crea: "",
  est_civil_per: "",
  // id_ubigeo_nac: "",
  nro_ruc: "",
  // id_pais_emisor_doc: 2087,
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
