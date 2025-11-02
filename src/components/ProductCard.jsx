import React, { useState } from "react";

export default function ProductCard({ product, onAddToCart }) {
  const [showDetails, setShowDetails] = useState(false);
  const subtotal = product.price * product.quantity;

  return (
    <div className="card bg-purple shadow" style={{ width: "250px" }}>
      <img
        src={`/images/${product.image}`}
        className="card-img-top"
        alt={product.name}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        {showDetails && <p className="small">{product.description}</p>}
        <p>Price: ₱{product.price.toLocaleString()}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Subtotal: ₱{subtotal.toLocaleString()}</p>
        {product.quantity < 5 && <p className="text-warning fw-bold">Low Stock</p>}
      </div>
      <div className="card-footer d-flex justify-content-between bg-transparent border-top-0 px-2 pb-2">
        <button className="btn btn-light btn-sm w-50 me-1" onClick={() => onAddToCart(product)}>Add to Cart</button>
        <button className="btn btn-light btn-sm w-50" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>
    </div>
  );
}
