export const corePost = async (url: string, obj: object) => {
  const data = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const dataJson = await data.json();
  return dataJson;
};

export const corePatch = async (url: string, obj: object) => {
  const data = await fetch(`${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const dataJson = await data.json();
  return dataJson;
};
