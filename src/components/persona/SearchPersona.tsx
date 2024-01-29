import { ButtonNext } from "@/shared/Components/ButtonNext";
import { ComboBoxFormik } from "@/shared/formikComponents/ComboBoxFormik";
import { TextInputFormik } from "@/shared/formikComponents/TextInputFormik";
import { Form, Formik } from "formik";
import React, { useState } from "react";

export const SearchPersona = ({ onSearch }: any) => {
  const formData = {
    nomb_per: "",
    ape_pat_per: "",
    ape_mat_per: "",
    nro_doc_per: "",
    tipoPersona: "1",
  };

  return (
    <div>
      <Formik initialValues={formData} onSubmit={onSearch}>
        {(formikProps) => {
          return (
            <Form>
              <div className="grid grid-cols-4 gap-4 forms">
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
                  <ComboBoxFormik
                    data={[
                      { id: 1, name: "Natural" },
                      { id: 2, name: "Juridico" },
                    ]}
                    name="tipoPersona"
                    // onSubmit={onSubmit}
                  />
                </div>
              </div>
              <ButtonNext
                type="submit"
                className="flex justify-end mt-4"
                valor="Buscar"
                classNameBotton="bg-[#6366F1] text-white letter rounded-sm px-4 py-2"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
