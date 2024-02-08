"use client";
import React, { useEffect, useState } from "react";
import { Tabla } from "./Tabla";
import { handleSearchPersona } from "./person.controller";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import { SumSign } from "@/shared/icons/SumSign";
import { SearchPersona } from "./SearchPersona";
import Modal from "@mui/material/Modal";
import { Box, Fade } from "@mui/material";
import { FormularioModal } from "./FormularioModal";

export const Person = () => {
  const [action, setAction] = useState({});
  const { store, storeTable, fetchData } = handleSearchPersona();
  const [idpersona, setIdpersona] = useState(null); // [1
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    fetchData(action);
  }, [action]);

  const onSearch = (value: any) => {
    setAction(value);
  };
  const onUpdate = (value: any) => {
    setIdpersona(value.id_persona);
    handleOpen();
  };

  return (
    <>
      <div>
        <div>
          <SearchPersona onSearch={onSearch} />
        </div>
        <div>
          <div>
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
        </div>

        <div className="bg-[#ecf2fa]">
          <div className="max-w-[1200px] overflow-x-auto mx-auto flex items-center justify-center  ">
            <Tabla
              dataStore={store}
              dataTable={storeTable}
              onUpdate={onUpdate}
            />
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Fade in={open}>
            <Box
              className="w-[90%] md:w-[60%]  h-[90vh]  md:h-auto overflow-auto rounded-lg"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "transparent",
              }}
            >
              <FormularioModal
                handleClose={handleClose}
                idpersona={idpersona}
              />
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};
