"use client";
import React, { useEffect, useState } from "react";
import { SearchPlanilla } from "./SearchPlanilla";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import { SumSign } from "@/shared/icons/SumSign";
import { CreatePlanilla } from "./CreatePlanilla";
import { ModalNext } from "@/shared/Components/ModalNext";
import { postCore, postRrhh, rutaRrhh } from "@/server/utils";
import { handleSearchPlanilla } from "./Planilla.controller";
import { Tabla } from "./Tabla";
import { on } from "events";

export const PlanillaInit = () => {
  const { store, storeTable, fetchData } = handleSearchPlanilla();

  useEffect(() => {
    fetchData({});
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSearch = (value: any) => {
    console.log(value);
  };
  const onCreatePlanilla = (value: any) => {
    console.log(value);
    try {
      postRrhh(rutaRrhh.create_planilla, value, (v: any, fetchData: any) => {
        if (v.ok) {
          console.log(fetchData);
        } else {
          console.log(fetchData);
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onUpdate = (value: any) => {
    console.log(value);
  };

  return (
    <div>
      <div>
        <SearchPlanilla onSearch={onSearch} />
      </div>
      <div>
        <div>
          <ButtonNext
            valor="Crear Planilla"
            classNameBotton="flex items-center justify-center gap-x-2 "
            onClick={handleOpen}
          >
            <SumSign />
          </ButtonNext>
        </div>
      </div>
      <div className="bg-[#ecf2fa]">
        <div className="max-w-[1200px] overflow-x-auto mx-auto flex items-center justify-center  ">
          <Tabla dataStore={store} dataTable={storeTable} onUpdate={onUpdate} />
        </div>
      </div>
      <ModalNext open={open} handleClose={handleClose}>
        <CreatePlanilla
          handleClose={handleClose}
          onCreatePlanilla={onCreatePlanilla}
        />
      </ModalNext>
    </div>
  );
};
