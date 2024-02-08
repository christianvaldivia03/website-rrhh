import { BACKEND_URL, RRHH } from "@/config/config";

export const patchRrhh = async (url: string, obj: object, response: any) => {
  try {
    const data = await fetch(`${BACKEND_URL}${RRHH}/${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    await response(await data, await data.json());
  } catch (error) {}
};

export const postRrhh = async (url: string, obj: object, response: any) => {
  try {
    const data = await fetch(`${BACKEND_URL}${RRHH}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    await response(await data, await data.json());
  } catch (error) {}
};
