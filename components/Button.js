import Link from "next/link";

const Button = (props) => {
  return (
    <>
      <Link href={props.reference}>
        <button className="rounded-lg bg-slate-900 py-2 px-16 mx-12 my-5 text-white font-semibold text-xl hover:bg-slate-600">
          {props.name}
        </button>
      </Link>
    </>
  );
};

export default Button;
