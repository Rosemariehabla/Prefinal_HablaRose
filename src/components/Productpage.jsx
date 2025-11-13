import { useParams } from "react-router-dom";

export default function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="card p-4">
      <img src={product.image} alt={product.name} style={{ maxWidth: "200px" }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Specification: {product.specification}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <p>Price: ₱{product.price.toLocaleString()}</p>
      <p>
        Quantity: {product.quantity}{" "}
        {product.quantity < 5 && <span className="text-danger">Low Stock!</span>}
      </p>
    </div>
  );
}
