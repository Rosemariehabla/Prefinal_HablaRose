import { useState } from "react";

export default function AddProductForm({ onAdd }) {
  const [form, setForm] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    specification: "",
    rating: "",
    price: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(form).every(val => val !== "");
    if (!allFilled) {
      alert("Please fill in all fields.");
      return;
    }
    onAdd({
      ...form,
      id: Date.now(),
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity),
      rating: parseFloat(form.rating)
    });
    setForm({
      image: "",
      name: "",
      category: "",
      description: "",
      specification: "",
      rating: "",
      price: "",
      quantity: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>Add New Product</h4>
      <div className="row">
        {["image", "name", "category", "description", "specification", "rating", "price", "quantity"].map((field) => (
          <div className="col-md-6 mb-3" key={field}>
            <input
              type={field === "price" || field === "quantity" || field === "rating" ? "number" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="form-control"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          </div>
        ))}
      </div>
      <button type="submit" className="btn btn-success">Add Product</button>
    </form>
  );
}
