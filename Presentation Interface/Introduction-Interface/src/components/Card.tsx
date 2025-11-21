/**
 * Ejemplo de un patrón de componentes compuestos en React + TypeScript.
 * 
 * Este archivo define un componente principal (`Card`) y un subcomponente (`CardBody`),
 * utilizando interfaces tipadas (`Props`) para definir sus propiedades.
 */
import { type ReactNode } from "react"; // Tipo de React que representa cualquier contenido renderizable (texto, número, JSX, etc.)

/**
 * Props del componente principal `Card`.
 * `children` representa los elementos JSX que se renderizan dentro del contenedor.
 */
interface CardProps {
  children: ReactNode;
}

/**
 * Props del subcomponente `CardBody`.
 * `title` es obligatorio; `text` es opcional.
 */
interface CardBodyProps {
  title: string;
  text?: string;
}

/**
 * Componente principal `Card`.
 * 
 * Actúa como contenedor visual con clases de Bootstrap (`card`) y 
 * aplica un estilo de ancho fijo. Renderiza cualquier contenido
 * pasado a través de `children`.
 */
function Card({ children }: CardProps) {
  const width = { width: "350px" };

  return (
    <div className="card" style={width}>
      <div className="card-body">{children}</div>
    </div>
  );
}

/**
 * Subcomponente `CardBody`.
 * 
 * Muestra el contenido principal de la tarjeta:
 * título, texto opcional y un botón de acción (por ahora vacío).
 */
export function CardBody({ title, text }: CardBodyProps) {
  return (
    <div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary"></a>
    </div>
  );
}

// Exporta el componente `Card` como exportación por defecto.
export default Card;