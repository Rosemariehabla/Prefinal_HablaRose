export default function CartDetails({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mb-4">
      <h3>Cart Summary</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₱{item.price.toLocaleString()}</td>
                <td>{item.quantity}</td>
                <td>₱{(item.price * item.quantity).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="table-primary">
              <td colSpan="4" className="fw-bold">Total</td>
              <td>₱{total.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}
