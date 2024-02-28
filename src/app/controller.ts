import { useState } from "react";

import images from "../../public/login/charmander.png";
import images2 from "../../public/login/charmander.png";

export const useImage = () => {
  const [Images, setImage] = useState(images);

  const imageCajero = () => {
    setImage(images2);
  };
  const imageCliente = () => {
    setImage(images);
  };
  return {
    Images,
    setImage,
    imageCajero,
    imageCliente,
  };
};
