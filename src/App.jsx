import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartDetails from "./components/CartDetails";
import "./App.css";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Kitchen Ware");
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      image: "blender.jpg",
      name: "Blender",
      category: "Kitchen Ware",
      price: 1200,
      quantity: 4,
      description: "Perfect for smoothies, sauces, and soups with high-speed blending."
    },
    {
      id: 2,
      image: "coffeemaker.jpeg",
      name: "Coffee Maker",
      category: "Kitchen Ware",
      price: 2200,
      quantity: 2,
      description: "Brews rich, aromatic coffee with programmable settings and auto shut-off."
    },
    {
      id: 3,
      image: "cooking-set.jpeg",
      name: "Cooking Set",
      category: "Kitchen Ware",
      price: 3500,
      quantity: 6,
      description: "Non-stick pots and pans for everyday cooking and easy cleanup."
    },
    {
      id: 4,
      image: "cup-saucer.jpeg",
      name: "Cup & Saucer",
      category: "Kitchen Ware",
      price: 800,
      quantity: 3,
      description: "Elegant ceramic set for tea or coffee, perfect for entertaining guests."
    },
    {
      id: 5,
      image: "food-processor.jpeg",
      name: "Food Processor",
      category: "Home Appliances",
      price: 5000,
      quantity: 5,
      description: "Multi-function processor for chopping, slicing, and mixing ingredients fast."
    },
    {
      id: 6,
      image: "Fryer.jpeg",
      name: "Fryer",
      category: "Home Appliances",
      price: 3000,
      quantity: 2,
      description: "Deep fryer with adjustable temperature and oil filtration system."
    },
    {
      id: 7,
      image: "Juicer.jpeg",
      name: "Juicer",
      category: "Home Appliances",
      price: 2500,
      quantity: 4,
      description: "Extracts juice from fruits and vegetables with minimal pulp and maximum flavor."
    },
    {
      id: 8,
      image: "PlateSet.jpeg",
      name: "Plate Set",
      category: "Kitchen Ware",
      price: 1500,
      quantity: 7,
      description: "Durable and stylish dinnerware set for everyday meals and special occasions."
    }
  ];

  const filteredProducts = products.filter(p => p.category === selectedCategory);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Product Management App</h1>
        <button className="btn btn-outline-dark">
          🛒 Cart ({cart.length} items) — Total: ₱{cartTotal.toLocaleString()}
        </button>
      </div>

      <div className="mb-4">
        <label className="me-2 fw-bold">Filter by Category:</label>
        <select
          className="form-select w-auto d-inline-block"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Kitchen Ware">Kitchen Ware</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>
      </div>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <CartDetails cart={cart} />
    </div>
  );
}
