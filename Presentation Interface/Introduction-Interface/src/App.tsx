/** 
Importaciones:
  Las importaciones presentes en cada archivo poseen la caracteristica de ser similar a Python,
  pero obedeciendo dos convenciones comunes.
  1. import <nombre> from <directorio>  ->  Equivale a una importación por defecto.
  2. import { <nombre> } from <directorio>  ->  Equivale a una importación con nombre en especifíco.
*/
import Card, {CardBody} from "./components/Card";
import Titulo from "./components/Titulo";

/** App()
  Función principal o también llamado componente raíz el cual presenta la renderización
  y que desde aquí se presentan los componentes de presentación.
*/
function App()
{
  /*
  El return es el que imprime el renderizado de la convención dada, aunque recomiendo que
  cuando se utilice el parentesis en el return para legibilidad.
  */
  return (
    /*
    Aunque se pueda creer así, esto no es un código HTML, sino que estas étiquetas son códigos
    jsx que serán transformados en el proceso de renderizado y esta sintaxis solo ayuda a
    legibilidad y estructura.
    */
  <div>
    <Titulo></Titulo>
    <Card>
      <CardBody title = "Hola Mundo" text="Texto"/>
    </Card>
  </div>
  );
}

// Dentro de mi experiencia esto solo hace que el componente (independiente del que sea)
// sea visible o exportable a otros. Favor de que el App() no se ande mandando importaciones
// circulares.
export default App;
