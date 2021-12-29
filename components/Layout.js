import Button from "../components/Button";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex overflow-x-hidden">
      <div className="h-screen w-1/6 bg-slate-900 sticky top-0">
        <Link href="/">
          <h1 className="text-3xl text-white p-10 font-semibold">Blog</h1>
        </Link>

        <input
          className="rounded-lg bg-slate-900 py-2 pl-2 ml-12 my-5 text-white font-semibold  hover:bg-slate-600"
          placeholder="Buscar"
        ></input>

        <Button name="Articulos" reference="/Articulos" />
        <Button name="Noticias" reference="/Noticias" />
        <Button name="Proyectos" reference="/Proyectos" />
        <Button name="Contacto" reference="/Contacto" />
      </div>
      <div className=" h-screen w-5/6">{children}</div>
    </div>
  );
};

export default Layout;
