import Swal from "sweetalert2";

// export const swallMsgError = Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Something went wrong!",
//   //   footer: '<a href="#">Why do I have this issue?</a>',
// });

export const swallMsgError = (msj: string) => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: msj,
  });
};

export const swallMsgAlert = (msj: string) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};

export const swallMsg = (msj: string) => {
  return Swal.fire(msj);
};
