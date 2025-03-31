import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Pagina } from "../../components/respuestaComponent.tsx";
import { respuesta } from "../../type.ts";
import Axios from "npm:axios"




export const handler: Handlers<respuesta[]> = {
  async GET(_req: Request, ctx: FreshContext<unknown, respuesta[]>) {
    const palabra = ctx.params.palabra;
    const respApi = await Axios.get<respuesta[]>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`
    );

    return ctx.render(respApi.data);
  },
};


export default function Home(props: PageProps<respuesta[]>) {
  const respuesta = props.data;
  
  return (
    <div class= "pagina">
      <Pagina respuesta={respuesta} />
    </div>
  );
}
