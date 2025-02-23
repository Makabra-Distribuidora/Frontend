import React from "react";
import ProductCard from "./ProductCard";
import products from "../../utils/products";

const ProductList = () => {
  return (
    <section className="grid grid-cols-2 gap-2 mx-2">
      {products.map(({ name, provider, sale_price, id, src }) => {
        return (
          <ProductCard
            key={id}
            name={name}
            brand={provider}
            cost={sale_price}
            src={name}
            alt={name}
          />
        );
      })}
    </section>
  );
};

export default ProductList;
