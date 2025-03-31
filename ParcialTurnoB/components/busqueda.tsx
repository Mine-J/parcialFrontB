import { FreshContext, Handlers } from "$fresh/server.ts";
import { FunctionalComponent } from "preact/src/index.d.ts";


export const handler: Handlers<string> = {
  async GET(req : Request, ctx: FreshContext<unknown,string>) {
    
    const url = new URL(req.url);
    const palabra = url.searchParams.get("palabra") || "";
    
    return ctx.render(palabra);
  }}

export const Busqueda: FunctionalComponent<string> = (palabra) => {
  return (
    <div class="contendorBusqueda">
      <div>
        <h1>CAMPO DE BUSQUEDA</h1>
      </div>
      <div>
        
        <form method="GET" action={`/`}>
          <input type="text" name="palabra" />
          <button class="botonBuscar" type="submit">
            buscar
          </button>
        </form>
      </div>
      
    </div>
  );
}

