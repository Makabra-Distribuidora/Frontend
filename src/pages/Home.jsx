import React from "react";
import Header from "../components/Header";
import ProductList from "../features/products/ProductList";
import ImageSlider from "../components/ImageSlider";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* <Header /> */}
      <MobileMenu />
      <div className="flex justify-center">
        <input
          className="py-2 px-4 border rounded-full min-w-96"
          type="text"
          placeholder="Que estas buscando?"
        />
      </div>
      <section className="px-2 py-4">
        <ImageSlider />
      </section>
      <section>
        <ProductList />
      </section>
    </main>
  );
};

export default Home;
