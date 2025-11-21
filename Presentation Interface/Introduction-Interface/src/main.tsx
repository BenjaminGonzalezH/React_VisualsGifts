/*
Este es el archivo principal de sobre TODA la aplicación de React y es uno de los componentes claves sobre
los cuales se insertan un modulo de comprobaciones y renderización. Si quieren una similitud con C sería
más o menos esto:

  int main() {
  iniciar_programa();
  renderizar_interfaz();
  }

*/
import { StrictMode } from 'react';                       // Verificación en tiempo de renderición de errores de código.
import { createRoot } from 'react-dom/client';            // Renderización de árbol de componentes.
import App from './App.tsx';                              // Cachen, es App.
import 'bootstrap/dist/css/bootstrap.min.css';            // No le pongo al diseño, así su framework de bootstrap para ponerle weno.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
