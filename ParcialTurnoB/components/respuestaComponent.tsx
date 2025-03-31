
import { FunctionalComponent } from "preact/src/index.d.ts";
import { respuesta,definitions } from "../type.ts";



export const Pagina: FunctionalComponent<respuesta[]> = (respuesta) => {
  const resp = respuesta.respuesta;
  
  return (
    <div class="contendorBusqueda">
      <h1>Palabra: {resp[0].word}</h1>
      <div>
        {resp?.map((elem: respuesta) =>
          elem.meanings?.map((elem2) => {
            
            return (
              <div class = "tipoConTodo">
                <h1>Tipo: {elem2.partOfSpeech}</h1>
                {elem2.definitions.map((def: definitions) => (
                  <div class="defEx">
                    {def.definition && <p>definition: {def.definition}</p>}
                    {def.example && <p>example: {def.example}</p>}
                  </div>
                ))}
                {elem2.synonyms.length > 0 && (
                  <p class="sinonimos">
                    synonyms:
                    {elem2.synonyms.map((syn, i) => {
                      return (
                        <>
                          {i < elem2.synonyms.length - 1 ? (
                            <a href={`/buscar/${syn}`}> &nbsp; {syn},</a>
                          ) : (
                            <a href={`/buscar/${syn}`}>&nbsp; {syn}. </a>
                          )}
                        </>
                      );
                    })}
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
