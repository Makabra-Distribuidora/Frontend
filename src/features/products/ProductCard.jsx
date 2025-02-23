import React from "react";

const ProductCard = ({ name, brand, cost, src, alt }) => {
  return (
    <article className="border px-4 py-2 text-center flex flex-col items-center">
      <img src={src} alt={alt} className="bg-gray-300 w-36 h-48" />
      <h2 className="uppercase text-sm my-2">{name}</h2>
      {brand === "Proveedor desconocido" ? null : <h4>{brand}</h4>}
      <p className="text-gray-500">${cost}</p>
    </article>
  );
};

export default ProductCard;
