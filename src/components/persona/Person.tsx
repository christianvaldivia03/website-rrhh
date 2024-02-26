"use client";
import React, { useEffect, useState } from "react";
import { Tabla } from "./Tabla";
import { handleSearchPersona } from "./person.controller";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import { SumSign } from "@/shared/icons/SumSign";
import { SearchPersona } from "./SearchPersona";
import { FormularioModal } from "./FormularioModal";
import { ModalNext } from "@/shared/Components/ModalNext";

export const Person = () => {
  const { store, storeTable, fetchData } = handleSearchPersona();
  const [idpersona, setIdpersona] = useState(null); // [1
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchData({});
  }, []);

  const onSearch = (value: any) => {
    fetchData(value);
  };
  const onUpdate = (value: any) => {
    setIdpersona(value.id_persona);
    handleOpen();
  };

  return (
    <>
      <div>
        <div className="mb-6">
          <SearchPersona onSearch={onSearch} />
        </div>
        <div className="mb-6">
          <ButtonNext
            valor="Crear Persona"
            classNameBotton="flex items-center justify-center gap-x-2 "
            onClick={() => {
              setIdpersona(null);
              handleOpen();
            }}
          >
            <SumSign />
          </ButtonNext>
        </div>

        <div className="bg-[#ecf2fa]">
          <div className="min-w-[900px]  overflow-x-auto mx-auto flex items-center justify-center  ">
            <Tabla
              dataStore={store}
              dataTable={storeTable}
              onUpdate={onUpdate}
            />
          </div>
        </div>
        <ModalNext open={open} handleClose={handleClose}>
          <FormularioModal
            handleClose={handleClose}
            idpersona={idpersona}
            fetchData={fetchData}
          />
        </ModalNext>
      </div>
    </>
  );
};
