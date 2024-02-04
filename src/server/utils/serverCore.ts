import { BACKEND_URL, CORE } from "@/config/config";

export const patchCore = async (url: string, obj: object, response: any) => {
  try {
    const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    await response(await data, await data.json());
  } catch (error) {}
};

export const postCore = async (url: string, obj: object, response: any) => {
  try {
    const data = await fetch(`${BACKEND_URL}${CORE}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    await response(await data, await data.json());
  } catch (error) {}
};
