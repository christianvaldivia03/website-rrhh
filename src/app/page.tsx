"use client";
import Image from "next/image";
import { useImage } from "./controller";
import { Form, Formik } from "formik";
import { TextInputFormik } from "@/shared/formikComponents/TextInputFormik";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import Link from "next/link";
import { CheckboxInput } from "@/shared/formikComponents/CheckboxInput";

export default function Home(props: any) {
  const { imageCajero, imageCliente, Images } = useImage();
  const initialValues = {
    usuario: "",
    contrasenia: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <div className="grid grid-cols-12 w-screen">
        <div className="col-span-5 ">
          <div className="w-[400px] m-auto h-screen flex flex-col justify-center">
            <p className="ferry text-lg font-[900] mb-12">Sistema de RRHH</p>
            <div className="flex items-center justify-center mb-12 gap-8">
              <ButtonNext
                onClick={() => {
                  // signIn();
                  imageCajero();
                }}
                valor="Usuario"
                // style={false}
              />
              <ButtonNext
                onClick={() => {
                  // signIn();
                  imageCliente();
                }}
                valor="Administrador"
                // style={true}
              />
            </div>
            <div className="mb-12">
              <p className="text-primary confortaa text-[24px] font-bold">
                Inicio de sesion
              </p>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                enableReinitialize={true}
              >
                <Form>
                  <div className="mb-2">
                    <label className="text-textColorOne font-mediumbold">
                      Usuario
                    </label>
                    <TextInputFormik
                      name="usuario"
                      placeholder="Ingresa tu usuario"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="text-textColorOne font-mediumbold">
                      Contrasenia
                    </label>
                    <TextInputFormik
                      name="contrasenia"
                      placeholder="Ingresa tu contraseña"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckboxInput type="" />
                    <p className="text-[#7B8498] text-xs">Mantener inicio</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Link href={`/persona`}>
                      <ButtonNext type="submit" valor="Ingresar" />
                    </Link>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-span-7 bg-blue-500 ">
          <Image
            src={Images}
            alt="image."
            className="h-screen w-screen object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
}
