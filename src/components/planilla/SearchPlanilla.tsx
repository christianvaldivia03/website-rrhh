"use client";
import { postCore, rutaCore } from "@/server/utils";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import { ComboBoxFormik } from "@/shared/formikComponents/ComboBoxFormik";
import { TextInputFormik } from "@/shared/formikComponents/TextInputFormik";
import { Form, Formik } from "formik";
import React, { use, useEffect, useState } from "react";

interface DataPlanilla {
  planilla_tipo: [];
  empleado_tipo: [];
}
export const controllerFormulario = () => {
  const [dataControler, setDataControler] = useState<DataPlanilla>({
    planilla_tipo: [],
    empleado_tipo: [],
  });
  const fetchDataInit = async () => {
    try {
      postCore(rutaCore.data_planilla, {}, (v: any, fetchedData: any) => {
        if (v.ok) {
          setDataControler(fetchedData);
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { dataControler, fetchDataInit };
};

export const SearchPlanilla = ({ onSearch }: any) => {
  const { dataControler, fetchDataInit } = controllerFormulario();
  useEffect(() => {
    fetchDataInit();
  }, []);

  console.log(dataControler);

  const formData = {
    id_anio: "",
    id_mes: "",
    id_tipo_planilla: "",
    id_tipo_trabajador: "",
    num_planilla: "",
    tit_planilla: "",
    est_planilla: "",
  };

  return (
    <div>
      <Formik initialValues={formData} onSubmit={onSearch}>
        {(formikProps) => {
          return (
            <Form className="forms">
              <div className="flex items-center justify-between w-full ">
                <div className="flex min-w-full">
                  <div className="flex flex-col gap-y-2 min-w-[300px]">
                    <div className="grid grid-cols-3 items-center w-full">
                      <span className="col-span-1 flex justify-end pr-3">
                        Año:
                      </span>
                      <div className="col-span-2">
                        <ComboBoxFormik
                          data={[
                            { id: 1, name: "Natural" },
                            { id: 2, name: "Juridico" },
                          ]}
                          name="id_anio"
                          // onSubmit={onSubmit}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                      <span className="col-span-1 flex justify-end pr-3">
                        Mes
                      </span>
                      <div className="col-span-2">
                        <ComboBoxFormik
                          data={[
                            { id: 1, name: "Natural" },
                            { id: 2, name: "Juridico" },
                          ]}
                          name="id_mes"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 min-w-[400px]">
                    <div className="grid grid-cols-3 items-center ">
                      <span className="col-span-1 flex justify-end pr-3">
                        Número:
                      </span>
                      <div className="col-span-2">
                        <TextInputFormik
                          type="text"
                          name="num_planilla"
                          placeholder="Num planilla"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                      <span className="col-span-1 flex justify-end pr-3">
                        Situación:
                      </span>
                      <div className="col-span-2">
                        <ComboBoxFormik
                          data={[
                            { id: 0, name: "Anulada" },
                            { id: 1, name: "Abierta" },
                            { id: 2, name: "Cerrada" },
                          ]}
                          name="est_planilla"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <ButtonNext
                  type="submit"
                  className="flex justify-end "
                  valor="Buscar"
                  classNameBotton="primary text-white letter rounded-sm px-4 py-2"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
