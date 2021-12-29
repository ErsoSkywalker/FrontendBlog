import Layout from "../components/Layout";
import Badge from "../components/Badge";

const Articulos = () => {
  return (
    <>
      <Layout>
        <div className="h-screen">
          <div className="h-1/6">
            <h1 className="text-5xl font-bold text-black p-10">Articulos</h1>
          </div>

          <div className="grid grid-cols-3 gap-4 px-5 h-auto">
            <Badge
              title="Hola Mundo"
              description="Bonito Badge"
              image="https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg"
            ></Badge>
            <Badge
              title="Hola Mundo"
              description="Bonito Badge"
              image="https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg"
            ></Badge>
            <Badge
              title="Hola Mundo"
              description="Bonito Badge"
              image="https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg"
            ></Badge>
            <Badge
              title="Hola Mundo"
              description="Bonito Badge"
              image="https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg"
            ></Badge>
            <Badge
              title="Hola Mundo"
              description="Bonito Badge"
              image="https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg"
            ></Badge>
            <Badge
              title="Hola Mundo"
              description="Bonito Badge"
              image="https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg"
            ></Badge>
            <Badge
              title="Hola Mundo"
              description="Bonito Badge"
              image="https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg"
            ></Badge>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Articulos;
