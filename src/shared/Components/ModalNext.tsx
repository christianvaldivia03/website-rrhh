import { Box, Fade, Modal } from "@mui/material";
import React from "react";

export const ModalNext = ({
  handleClose,
  open,
  children,
}: {
  handleClose: () => void;
  open: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box
            className="w-[90%] md:w-[80%]  h-[60vh]  md:h-auto overflow-auto rounded-lg"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "transparent",
            }}
          >
            {children}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
