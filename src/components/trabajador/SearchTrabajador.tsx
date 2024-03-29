"use client";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import { ComboBoxFormik } from "@/shared/formikComponents/ComboBoxFormik";
import { TextInputFormik } from "@/shared/formikComponents/TextInputFormik";
import { Form, Formik } from "formik";
import React from "react";

export const SearchTrabajador = ({ onSearch }: any) => {
  const formData = {
    nomb_per: "",
    ape_pat_per: "",
    ape_mat_per: "",
    nro_doc_per: "",
    cod_trab: "",
  };

  return (
    <div>
      <Formik initialValues={formData} onSubmit={onSearch}>
        {(formikProps) => {
          return (
            <Form className="flex items-center">
              <div className="grid grid-cols-3 gap-4 forms flex-1">
                <div className="col-span-1">
                  <TextInputFormik
                    type="text"
                    name="nro_doc_per"
                    placeholder="nro_doc_per"
                    className="col-span-5 md:col-span-5"
                  />
                </div>
                <div className="col-span-1">
                  <TextInputFormik
                    type="text"
                    name="nomb_per"
                    placeholder="Nombre"
                    className="col-span-5 md:col-span-5"
                  />
                </div>
                <div className="col-span-1">
                  <TextInputFormik
                    type="text"
                    name="ape_pat_per"
                    placeholder="Apellido Paterno"
                  />
                </div>
                <div className="col-span-1">
                  <TextInputFormik
                    type="text"
                    name="ape_mat_per"
                    placeholder="Apellido Materno"
                  />
                </div>
                <div className="col-span-1">
                  <TextInputFormik
                    type="text"
                    name="cod_trab"
                    placeholder="Codigo Trabajador"
                  />
                </div>
              </div>
              <ButtonNext
                type="submit"
                className="flex justify-end my-4 mx-6"
                valor="Buscar"
                classNameBotton="bg-primary hover:bg-[#4d4fc7] text-white letter rounded-sm px-8 py-3"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
