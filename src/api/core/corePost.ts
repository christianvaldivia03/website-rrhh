// import { BACKEND_URL, CORE } from "@/config/config";

// export const postServerCore = async (
//   url: string,
//   obj: object,
//   darmensaje: any
// ) => {
//   try {
//     const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(obj),
//     });
//     await darmensaje(await data, await data.json());
//   } catch (error) {}
// };

// export const postServerCore2 = async (
//   url: string,
//   obj: object,
//   darmensaje: any
// ) => {
//   try {
//     const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(obj),
//     });
//     await darmensaje(await data, await data.json());
//   } catch (error) {}
// };

// // export const corePost = async (url: string, obj: object) => {
// //   const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify(obj),
// //   });
// //   const dataJson = await data.json();
// //   return dataJson;
// // };
// // export const corePost = async (url: string, obj: object) => {
// //   try {
// //     const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(obj),
// //     });
// //     if (!data.ok) {
// //       console.log(
// //         "Si la respuesta no es exitosa, lanzar un error con el mensaje"
// //       );
// //       const errorData = await data.json();
// //       console.log("errorData", errorData.message);
// //       return errorData;
// //     }
// //     const dataJson = await data.json();
// //     return dataJson;
// //   } catch (error) {
// //     // console.error("Error en la solicitud PATCH:", error);
// //     // throw error; // Lanzar el error nuevamente para que el código que llama pueda manejarlo
// //   }
// // };

// // export const postServerCore = async (
// //   url: string,
// //   obj: object,
// //   darmensaje: any
// // ) => {
// //   try {
// //     const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(obj),
// //     });
// //     if (!data.ok) {
// //       await darmensaje(await data.json());
// //     } else {
// //       darmensaje(null);
// //     }
// //     // const dataJson = await data.json();
// //     // console.log(dataJson);
// //   } catch (error) {}
// // };

// // export const corePatch = async (url: string, obj: object) => {
// //   const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
// //     method: "PATCH",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify(obj),
// //   });
// //   const dataJson = await data.json();
// //   return dataJson;
// // };

// // export const corePatch = async (url: string, obj: object) => {
// //   try {
// //     const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(obj),
// //     });

// //     if (!data.ok) {
// //       // console.log(
// //       //   "Si la respuesta no es exitosa, lanzar un error con el mensaje"
// //       // );
// //       const errorData = await data.json();
// //       // console.log("errorData", errorData);
// //       throw new Error(JSON.stringify(errorData));
// //     }

// //     const dataJson = await data.json();
// //     return dataJson;
// //   } catch (error) {
// //     // Capturar el error y manejarlo según sea necesario
// //     console.error("Error en la solicitud PATCH:", error);

// //     if (error instanceof Error) {
// //       try {
// //         const errorObject = JSON.parse(error.message);
// //         // Verificar si el error es un Internal Server Error (código de estado 500)
// //         if (errorObject.statusCode === 500) {
// //           console.error("Error interno del servidor:", errorObject.message);
// //           // Aquí puedes tomar medidas adicionales si es necesario
// //         }
// //       } catch (jsonError) {
// //         console.error("Error al analizar el mensaje de error JSON:", jsonError);
// //       }
// //     }

// //     throw error; // Lanzar el error nuevamente para que el código que llama pueda manejarlo
// //   }
// // };

// // export const corePatch = async (url: string, obj: object) => {
// //   try {
// //     const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(obj),
// //     });

// //     if (!data.ok) {
// //       // Si la respuesta no es exitosa, lanzar un error con el mensaje
// //       const errorData = await data.json();
// //       throw new Error(JSON.stringify(errorData));
// //     }

// //     const dataJson = await data.json();
// //     return dataJson;
// //   } catch (error) {
// //     // Capturar el error y manejarlo según sea necesario
// //     console.error("Error en la solicitud PATCH:", error);
// //     throw error; // Lanzar el error nuevamente para que el código que llama pueda manejarlo
// //   }
// // };
