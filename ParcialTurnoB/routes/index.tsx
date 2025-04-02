import { Busqueda } from "../components/busqueda.tsx";
import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req : Request, ctx: FreshContext<unknown>) {
    
    const url = new URL(req.url);
    const palabra = url.searchParams.get("palabra");
    
    if(palabra) {
      return new Response("", {
        status: 307, // See Other
        headers: {
          Location: `/buscar/${palabra}`
        }
      });
    }
    return ctx.render();
  }}

export default function Home() {
  
  return (
    <div class = "pagina">
      <Busqueda/>
    </div>
  );
}
