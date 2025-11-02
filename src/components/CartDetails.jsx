import React from "react";

export default function CartDetails({ cart }) {
  if (cart.length === 0) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-5">
      <h4>🛒 Cart Details</h4>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>₱{item.price.toLocaleString()}</td>
              <td>{item.quantity}</td>
              <td>₱{(item.price * item.quantity).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end"><strong>Total Amount</strong></td>
            <td><strong>₱{totalAmount.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
