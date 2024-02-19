"use client";
import { postCore, rutaCore } from "@/server/utils";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import { ComboBoxFormik } from "@/shared/formikComponents/ComboBoxFormik";
import { TextInputFormik } from "@/shared/formikComponents/TextInputFormik";
import * as Yup from "yup";
import MensajeEnviadoCorrectamenteIcon from "@/shared/icons/MensajeEnviadoCorrectamenteIcon";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";

interface DataPlanilla {
  planilla_tipo: [];
  empleado_tipo: [];
  anio: [];
  mes: [];
}
export const controllerFormulario = () => {
  const [dataControler, setDataControler] = useState<DataPlanilla>({
    planilla_tipo: [],
    empleado_tipo: [],
    anio: [],
    mes: [],
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

export const CreatePlanilla = ({ handleClose, onCreatePlanilla }: any) => {
  const { dataControler, fetchDataInit } = controllerFormulario();

  useEffect(() => {
    fetchDataInit();
  }, []);
  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();
  const mesActual = (fechaActual.getMonth() + 1).toString().padStart(2, "0");


  const formData = {
    id_anio: anioActual,
    id_mes: mesActual,
    id_tipo_planilla: 1,
    id_tipo_trabajador: 1,
    obs_planilla: "",
  };

  const validationSchema = Yup.object({
    id_anio: Yup.string().required("Este campo es requerido"),
    id_mes: Yup.string().required("Este campo es requerido"),
    id_tipo_planilla: Yup.string().required("Este campo es requerido"),
    id_tipo_trabajador: Yup.string().required("Este campo es requerido"),
  });
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  if (!isSuccessfull) {
    return (
      <div className="mx-40 px-10 py-8 bg-blanco ">
        <div>
          <p>Registrar</p>
        </div>
        <div>
          {" "}
          <Formik
            initialValues={formData}
            onSubmit={onCreatePlanilla}
            validationSchema={validationSchema}
          >
            {(formikProps) => {
              return (
                <Form className="forms">
                  <div className="my-4">
                    <div className="flex items-center justify-around">
                      <div className="grid grid-cols-6 items-center">
                        <span className="col-span-1 flex justify-end pr-3">
                          Año:
                        </span>
                        <div className="col-span-5">
                          <ComboBoxFormik
                            data={dataControler?.anio?.map((item: any) => {
                              return {
                                id: item.id_anio,
                                name: `${item.cod_anio}`,
                              };
                            })}
                            name="id_anio"
                            // onSubmit={onSubmit}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-6 items-center">
                        <span className="col-span-1 flex justify-end pr-3">
                          Mes
                        </span>
                        <div className="col-span-5">
                          <ComboBoxFormik
                            data={dataControler?.mes?.map((item: any) => {
                              return {
                                id: item.id_mes,
                                name: `${item.nomb_mes}`,
                              };
                            })}
                            name="id_mes"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-4 ">
                    <div className="grid grid-cols-6 items-center ">
                      <span className="col-span-1 flex justify-end pr-3">
                        Tipo Planilla:
                      </span>
                      <div className="col-span-5">
                        <ComboBoxFormik
                          data={dataControler?.planilla_tipo?.map(
                            (item: any) => {
                              return {
                                id: item.id_tipo_planilla,
                                name: `${item.id_tipo_planilla} - ${item.nomb_tipo_pla}`,
                              };
                            }
                          )}
                          name="id_tipo_planilla"
                          // onSubmit={onSubmit}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-6 items-center">
                      <span className="col-span-1 flex justify-end pr-3">
                        Tipo Trabajador:
                      </span>
                      <div className="col-span-5">
                        <ComboBoxFormik
                          data={dataControler?.empleado_tipo?.map(
                            (item: any) => {
                              return {
                                id: item.id_tipo_trabajador,
                                name: `${item.id_tipo_trabajador} - ${item.desc_tipo_trabajador}`,
                              };
                            }
                          )}
                          name="id_tipo_trabajador"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-6 items-center">
                      <span className="col-span-1 flex justify-end pr-3">
                        Observación:
                      </span>
                      <div className="col-span-5">
                        <TextInputFormik
                          type="text"
                          name="obs_planilla"
                          placeholder="Observación"
                        />
                      </div>
                    </div>
                  </div>
                  <ButtonNext
                    type="submit"
                    className="flex justify-end "
                    valor="Buscar"
                    classNameBotton="bg-[#6366F1] text-white letter rounded-sm px-4 py-2 mt-4"
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-tertiary text-blanco py-10 flex space-x-2 items-center justify-center font-bol text-xl">
        <MensajeEnviadoCorrectamenteIcon className="fill-blanco" />
        <span>¡Persona Registrada Correctamente!</span>
      </div>
    );
  }
};
