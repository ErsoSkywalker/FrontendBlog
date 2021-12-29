import React from "react";

const Badge = ({ title, description, image }) => {
  return (
    <>
      <div className="bg-slate-600 rounded-lg ">
        <div className="w-full bg-slate-900 h-3/5 rounded-lg">
          <img
            src={image}
            className="rounded-t-lg object-cover h-full w-full"
          />
        </div>
        <div className="w-full bg-gray-400 h-2/5 rounded-lg">
          <h1 className="text-black text-2xl font-semibold p-2">{title}</h1>
          <h1 className="text-black text-base px-2">{description}</h1>
          <button className="rounded-lg bg-blue-500 p-2 mx-12">Ver más</button>
        </div>
      </div>
    </>
  );
};

export default Badge;
