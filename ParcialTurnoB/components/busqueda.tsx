
import { FunctionalComponent } from "preact/src/index.d.ts";




export const Busqueda: FunctionalComponent = () => {
  return (
    <div class="contendorBusqueda">
      <div>
        <h1>CAMPO DE BUSQUEDA</h1>
      </div>
      <div>
        
        <form method="GET">
          <input type="text" name="palabra" />
          <button class="botonBuscar" type="submit">
            buscar
          </button>
        </form>
      </div>
      
    </div>
  );
}

