// Esto es un componente de titulo, bonito ¿no?
// Esta es la estructura más piola que puede tener uno de estos componentes.
function Titulo()
{
  /**
    Damas y caballeroes les presento las variables ¿Donde esta str o string? Ni puta
    idea ya que en este hermosos mundo del FrontEnd tenemos:
        - const: Constante (No muta).
        - let: Mutable, solo para valores que se pueden o deben reasignarse.
        - var: Esto ya esta viejito, mejor no lo uses.
   */
  const Nombre = "Watona"
  return <h1>Hola {Nombre}</h1>
}

export default Titulo;
