import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="d-flex flex-wrap gap-4 justify-content-start mt-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
