"use client";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { ComboBoxFormik } from "@/shared/formikComponents/ComboBoxFormik";
import { TextInputFormik } from "@/shared/formikComponents/TextInputFormik";
import { Tab } from "@headlessui/react";
import { SumSign } from "@/shared/icons/SumSign";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import MensajeEnviadoCorrectamenteIcon from "@/shared/icons/MensajeEnviadoCorrectamenteIcon";
import { patchRrhh, postRrhh } from "@/server/utils";
import { controllerFormulario } from "./trabajador.controller";
import { Trabajador } from "@/server/models/rrhh";
import { id } from "date-fns/locale";

export const FormTrabajador = ({ handleClose, idpersona, idcorrtrab }: any) => {
  const userFromsValue: Trabajador = {
    cuspp: "",
    id_persona: 0,
    estado_trabajador: 0,
    tipo_pago: 0,
    cod_trab: "",
    // sujeto_a_regimen: undefine,
    situacion: 0,
    id_regimen_pension: 0,
    id_regimen_pension_estado: 0,
    id_regimen_salud: 0,
    num_regimen_salud: "",
    id_situacion_educativa: 0,
    id_tipo_cuent_banco: 0,
    id_tipo_trabajador: 0,
    num_cuenta_banco_sueldo: "",
    num_cuenta_banco_sueldo_cci: "",
  };

  const [initialValues, setInitialValues] = useState<{ [key: string]: any }>(
    userFromsValue
  );

  const { dataControler, fetchDataEntidad, userForms, dataPersona } =
    controllerFormulario(idpersona, idcorrtrab);

  const fetchDataTrabajador = async () => {
    try {
      if (idpersona != null && idcorrtrab != null) {
        await postRrhh(
          "trabajador/one-search",
          { id_persona: idpersona, id_corr_trab: idcorrtrab },
          (v: any, l: any) => {
            if (v.ok) {
              // console.log(l);
              setInitialValues(l);
            } else {
              // console.log(l.message);
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

  const updateTrabajador = async (
    values: Trabajador,
    idpersona: any,
    idcorrtrab: any
  ) => {
    if (idcorrtrab != null) {
      console.log("update");
      await patchRrhh("trabajador/update", values, (v: any, l: any) => {
        if (v.ok) {
        } else {
          console.log(l.message);
        }
      });
    } else {
      console.log("create");
      const { id_corr_trab, ...datos } = values;
      console.log(datos);
      await postRrhh("trabajador/create", { ...datos }, (v: any, l: any) => {
        if (v.ok) {
        } else {
          console.log(l.message);
        }
      });
    }
  };

  useEffect(() => {
    fetchDataEntidad();
  }, []);

  useEffect(() => {
    fetchDataTrabajador();
  }, [idpersona, idcorrtrab]);

  const validationSchema = Yup.object({});

  const onSubmit = (values: Trabajador, { setSubmitting }: any) => {
    setSubmitting(false);
    setIsSuccessfull(true);
    const employee = new Trabajador(values);
    updateTrabajador(
      {
        id_persona: employee.id_persona,
        id_corr_trab: idcorrtrab,
        cod_trab: employee.cod_trab,
        tipo_pago: employee.tipo_pago,
        cuspp: employee.cuspp,
        // sujeto_a_regimen: employee.sujeto_a_regimen,
        estado_trabajador: employee.estado_trabajador,
        situacion: employee.situacion,
        id_regimen_pension: employee.id_regimen_pension,
        id_regimen_pension_estado: employee.id_regimen_pension_estado,
        id_regimen_salud: employee.id_regimen_salud,
        num_regimen_salud: employee.num_regimen_salud,
        id_situacion_educativa: employee.id_situacion_educativa,
        id_tipo_cuent_banco: employee.id_tipo_cuent_banco,
        id_tipo_trabajador: employee.id_tipo_trabajador,
        num_cuenta_banco_sueldo: employee.num_cuenta_banco_sueldo,
        num_cuenta_banco_sueldo_cci: employee.num_cuenta_banco_sueldo_cci,
      },
      idpersona,
      idcorrtrab
    );
  };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const menu = [
    "Datos Laborales",
    "Salud y Cuenta Sueldo",
    "Cuentas Bancarias",
    "Detalle Dirección",
  ];

  const [isSuccessfull, setIsSuccessfull] = useState(false);
  if (!isSuccessfull) {
    return (
      <div className="bg-blanco ">
        <Formik
          initialValues={{ id_persona: 0, ...initialValues }}
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
                              <p className="col-span-2">Seleccione Persona: </p>
                              <ComboBoxFormik
                                data={
                                  dataPersona
                                    ? dataPersona?.map((item: any) => {
                                        return {
                                          id: item.id_persona,
                                          name:
                                            item.nro_doc_per +
                                            " - " +
                                            item.ape_pat_per +
                                            " " +
                                            item.ape_mat_per +
                                            " " +
                                            item.nomb_per,
                                        };
                                      })
                                    : []
                                }
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                name="id_persona"
                                //placeholder= "Numero Cuenta Banco Sueldo"
                                type="text"
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1"></div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Tipo de trabajador: </p>
                              <ComboBoxFormik
                                data={[
                                  { id: 1, name: "DOCENTE" },
                                  { id: 2, name: "ADMINISTRATIVO" },
                                  { id: 3, name: "OBRERO" },
                                  { id: 4, name: "OTRO" },
                                ]}
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                {...userForms.id_tipo_trabajador}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Código</p>
                              <TextInputFormik
                                {...userForms.cod_trab}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Regimen pensión: </p>
                              <ComboBoxFormik
                                data={dataControler["REGIMEN-PENSION"]}
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                {...userForms.id_regimen_pension}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Estado pensión: </p>
                              <ComboBoxFormik
                                data={dataControler["AFP-ESTADO"]}
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                {...userForms.id_regimen_pension_estado}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">CUSPP</p>
                              <TextInputFormik
                                {...userForms.cuspp}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div></div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Regimen salud: </p>
                              <ComboBoxFormik
                                data={dataControler["REGIMEN-SALUD"]}
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                {...userForms.id_regimen_salud}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Número: </p>
                              <TextInputFormik
                                {...userForms.num_regimen_salud}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Banco: </p>
                              <ComboBoxFormik
                                data={dataControler["BANCO"]}
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                {...userForms.id_tipo_cuent_banco}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Número de cuenta: </p>
                              <TextInputFormik
                                {...userForms.num_cuenta_banco_sueldo}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">
                                Número de cuenta interbancaria:{" "}
                              </p>
                              <TextInputFormik
                                {...userForms.num_cuenta_banco_sueldo_cci}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="grid grid-cols-2 forms">
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Regimen pensión: </p>
                              <ComboBoxFormik
                                data={dataControler["REGIMEN-PENSION"]}
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                {...userForms.id_regimen_pension}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Estado pensión: </p>
                              <ComboBoxFormik
                                data={dataControler["AFP-ESTADO"]}
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                {...userForms.id_regimen_pension_estado}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">CUSPP</p>
                              <TextInputFormik
                                {...userForms.cuspp}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div></div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Regimen salud: </p>
                              <ComboBoxFormik
                                data={dataControler["REGIMEN-SALUD"]}
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                {...userForms.id_regimen_salud}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Número: </p>
                              <TextInputFormik
                                {...userForms.num_regimen_salud}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Banco: </p>
                              <ComboBoxFormik
                                data={dataControler["BANCO"]}
                                init={{ value: 0, mensaje: "SELECCIONE" }}
                                {...userForms.id_tipo_cuent_banco}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>

                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">Número de cuenta: </p>
                              <TextInputFormik
                                {...userForms.num_cuenta_banco_sueldo}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                          <div className="col-span-1 px-4 py-2">
                            <div className="grid grid-cols-7 items-center">
                              <p className="col-span-2">
                                Número de cuenta interbancaria:{" "}
                              </p>
                              <TextInputFormik
                                {...userForms.num_cuenta_banco_sueldo_cci}
                                className="col-span-5 md:col-span-5"
                              />
                            </div>
                          </div>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel></Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
                <div className="flex items-center justify-end space-x-8">
                  <ButtonNext
                    type="submit"
                    valor={idpersona ? "Actualizar" : "Crear Trabajador"}
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
