import { Link } from "react-router-dom";

export default function ProductList({ products, onAddToCart, onDelete }) {
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-3 mb-4">
          <div className="card h-100">
            <img src={product.image} alt={product.name} className="card-img-top" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text mb-1">₱{product.price.toLocaleString()}</p>
              <p className="mb-3">
                Quantity: {product.quantity}{" "}
                {product.quantity < 5 && (
                  <span className="badge bg-danger ms-2">Low Stock</span>
                )}
              </p>
              <div className="mt-auto d-flex justify-content-between">
                <Link to={`/product/${product.id}`} className="btn btn-info btn-sm">
                  View
                </Link>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onAddToCart(product)}
                >
                  Add
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
