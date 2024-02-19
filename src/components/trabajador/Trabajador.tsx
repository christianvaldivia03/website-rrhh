"use client";
import React, { useEffect, useState } from "react";
import { handleSearchTrabajador } from "./trabajador.controller";
import { SearchTrabajador } from "./SearchTrabajador";
import { Tabla } from "./Tabla";
import Modal from "@mui/material/Modal";
import { Box, Fade } from "@mui/material";
import { FormTrabajador } from "./FormTrabajador";
import { ButtonNext } from "@/shared/Components/ButtonNext";
import { SumSign } from "@/shared/icons/SumSign";

export const Trabajador = () => {
  const [action, setAction] = useState({});
  const { store, storeTable, fetchData } = handleSearchTrabajador();

  // const [idpersona, setIdpersona] = useState(null);
  const [idtrabador, setIdtrabajador] = useState({
    idpersona: null,
    idcorrtrab: null,
  });
  const { idpersona, idcorrtrab } = idtrabador;

  const [open, setOpen] = useState(false);
  const [clikSearch, setClickSearch] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    fetchData(action);
  }, [clikSearch]);

  const onSearch = (value: any) => {
    setAction(value);
    setClickSearch(!clikSearch);
  };
  const onUpdate = (value: any) => {
    setIdtrabajador({
      idpersona: value.id_persona,
      idcorrtrab: value.id_corr_trab,
    });
    handleOpen();
  };

  return (
    <>
      <div>
        <div>
          <SearchTrabajador onSearch={onSearch} />
        </div>
        <div>
          <div>
            <ButtonNext
              valor="Crear Trabajador"
              classNameBotton="flex items-center justify-center gap-x-2 "
              onClick={() => {
                setIdtrabajador({
                  idpersona: null,
                  idcorrtrab: null,
                });
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
            {/* <div className="bg-blanco">
              <SearchExistPersona />
            </div> */}

            <FormTrabajador
              handleClose={handleClose}
              idpersona={idpersona}
              idcorrtrab={idcorrtrab}
            />
          </Box>
        </Modal>
      </div>
    </>
  );
};
