"use client";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { ComboBoxFormik } from "@/shared/formikComponents/ComboBoxFormik";
import { TextInputFormik } from "@/shared/formikComponents/TextInputFormik";
import { Tab } from "@headlessui/react";
import { controllerFormulario } from "./formulario.controller";
import { SumSign } from "@/shared/icons/SumSign";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import MensajeEnviadoCorrectamenteIcon from "@/shared/icons/MensajeEnviadoCorrectamenteIcon";

export const FormularioModal = ({ handleClose, idpersona }: any) => {
  // console.log(idpersona);
  const {
    dataControler,
    fetchDataEntidad,
    userForms,
    initialValues,
    updatePersona,
    // fetchDataPersona,
  } = controllerFormulario(idpersona);

  useEffect(() => {
    fetchDataEntidad();
    // fetchDataPersona();
    // initialValues;
    // console.log(initialValues);
  }, [idpersona]);

  const validationSchema = Yup.object({
    tipo_per: Yup.string().required("Este campo es requerido"),
    tipo_doc_per: Yup.string().required("Este campo es requerido"),
    nro_doc_per: Yup.string().required("Este campo es requerido"),
    ape_pat_per: Yup.string().required("Este campo es requerido"),
    ape_mat_per: Yup.string().required("Este campo es requerido"),
    nomb_per: Yup.string().required("Este campo es requerido"),
    direc_per: Yup.string().required("Este campo es requerido"),
    sex_per: Yup.string().required("Este campo es requerido"),
    // fech_nac_per: "",
    id_pais_nac: Yup.string().required("Este campo es requerido"),
    // aud_fech_crea: "",
    est_civil_per: Yup.string().required("Este campo es requerido"),
    // id_ubigeo_nac: "",
    nro_ruc: Yup.string().required("Este campo es requerido"),
  });
  // console.log(handleClose);

  const onSubmit = (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    setIsSuccessfull(true);
    updatePersona(values, idpersona);
    // console.log(values);
    // handleClose();
  };
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const menu = [
    "Datos Generales",
    "Contacto",
    "Cuentas Bancarias",
    "Detalle Dirección",
  ];
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  if (!isSuccessfull) {
    return (
      <div className="bg-blanco ">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {({ isSubmitting, isValid, dirty }) => {
            return (
              <Form className="py-2 px-4">
                <div className="h-[500px]">
                  <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                      {menu.map((category) => (
                        <Tab
                          key={category}
                          className={({ selected }) =>
                            classNames(
                              "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                              selected
                                ? "bg-white text-blue-700 shadow"
                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                            )
                          }
                        >
                          {category}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels>
                      <Tab.Panel>
                        <div className="grid grid-cols-2 forms">
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Tipo documento: </p>
                              <ComboBoxFormik
                                data={dataControler["DOC-IDENTIDAD"]}
                                {...userForms.tipo_doc_per}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">
                                Número de documento:{" "}
                              </p>
                              <TextInputFormik
                                {...userForms.nro_doc_per}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Tipo Persona: </p>
                              <ComboBoxFormik
                                data={[
                                  { id: 1, name: "Natural" },
                                  { id: 2, name: "Juridico" },
                                ]}
                                {...userForms.tipo_per}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Ruc: </p>
                              <TextInputFormik
                                {...userForms.nro_ruc}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Apellido Paterno: </p>
                              <TextInputFormik
                                {...userForms.ape_pat_per}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Apellido Materno: </p>
                              <TextInputFormik
                                {...userForms.ape_mat_per}
                                name="ape_mat_per"
                                placeholder="Apellido Materno"
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-2 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-1">Nombes: </p>
                              <TextInputFormik
                                {...userForms.nomb_per}
                                className="col-span-6 md:col-span-6"
                              />
                            </div>
                          </div>
                          <div className="col-span-2 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-1">Dirección: </p>
                              <TextInputFormik
                                {...userForms.direc_per}
                                className="col-span-6 md:col-span-6"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Sexo: </p>
                              <ComboBoxFormik
                                data={[
                                  { id: "M", name: "Masculino" },
                                  { id: "F", name: "Femenino" },
                                ]}
                                {...userForms.sex_per}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Estado civil: </p>
                              <ComboBoxFormik
                                data={[
                                  { id: "S", name: "Soltero" },
                                  { id: "C", name: "Casado" },
                                  { id: "D", name: "Divorciado" },
                                  { id: "V", name: "Viudo" },
                                ]}
                                {...userForms.est_civil_per}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Nacionalidad: </p>
                              <ComboBoxFormik
                                data={dataControler["PAIS"]}
                                {...userForms.id_pais_nac}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel></Tab.Panel>
                      <Tab.Panel></Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
                <div className="flex items-center justify-end space-x-8">
                  <ButtonNext
                    type="submit"
                    valor={idpersona ? "Actualizar" : "Crear Persona"}
                    classNameBotton="flex items-center justify-center gap-x-2 "
                    // onClick={handleOpen}
                  >
                    <SumSign />
                  </ButtonNext>
                  <ButtonNext
                    type="button"
                    valor="Cerrar"
                    classNameBotton="flex items-center justify-center gap-x-2 bg-red-500 "
                    onClick={handleClose}
                  >
                    {/* <CerrarIcon /> */}
                  </ButtonNext>
                </div>
              </Form>
            );
          }}
        </Formik>
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
