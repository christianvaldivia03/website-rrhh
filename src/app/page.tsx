import { CircleInit } from "@/shared/icons/CircleInit";
export default function Home(props: any) {
  // const data = await fetchData("https://pokeapi.co/api/v2/pokemon/4");
  return (
    <main className="my-10">
      <div className="grid grid-cols-9">
        <div className="col-span-1 bg-[#1E293B]">
          <div className="m-4">
            <CircleInit />
          </div>

          <p className="text-center">Sistema RRHH</p>
        </div>
        <div className="col-span-8">
          <h1 className="text-3xl text-secondary">
            Registro de Personas del sistema
          </h1>
          {/* <p>Actualizar</p> */}
          {/* <Formulario /> */}
          {/* <List /> */}
        </div>
      </div>
    </main>
  );
}