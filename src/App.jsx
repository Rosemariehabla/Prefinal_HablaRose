import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartDetails from "./components/CartDetails";
import ProductPage from "./components/Productpage";
import AddProductForm from "./components/AddProductForm";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/images/blender.jpg",
      name: "Blender",
      category: "Kitchen Ware",
      price: 1200,
      quantity: 4,
      description: "Perfect for smoothies, sauces, and soups.",
      specification: "600W motor, 1.5L jar",
      rating: 4.5
    },
    {
      id: 2,
      image: "/images/coffeemaker.jpeg",
      name: "Coffee Maker",
      category: "Kitchen Ware",
      price: 2200,
      quantity: 2,
      description: "Brews rich, aromatic coffee.",
      specification: "Auto shut-off, 12-cup capacity",
      rating: 4.2
    },
    {
      id: 3,
      image: "/images/cooking-set.jpeg",
      name: "Cooking Set",
      category: "Kitchen Ware",
      price: 3500,
      quantity: 6,
      description: "Non-stick pots and pans.",
      specification: "10-piece set, induction compatible",
      rating: 4.7
    },
    {
      id: 4,
      image: "/images/cup-saucer.jpeg",
      name: "Cup & Saucer",
      category: "Kitchen Ware",
      price: 800,
      quantity: 3,
      description: "Elegant ceramic set for tea or coffee.",
      specification: "6 cups, 6 saucers",
      rating: 4.3
    },
    {
      id: 5,
      image: "/images/food-processor.jpeg",
      name: "Food Processor",
      category: "Home Appliances",
      price: 5000,
      quantity: 5,
      description: "Chops, slices, and mixes fast.",
      specification: "Multiple blades, 2L bowl",
      rating: 4.6
    },
    {
      id: 6,
      image: "/images/Fryer.jpeg",
      name: "Fryer",
      category: "Home Appliances",
      price: 3000,
      quantity: 2,
      description: "Deep fryer with oil filtration.",
      specification: "3L capacity, removable basket",
      rating: 4.1
    },
    {
      id: 7,
      image: "/images/Juicer.jpeg",
      name: "Juicer",
      category: "Home Appliances",
      price: 2500,
      quantity: 4,
      description: "Extracts juice with minimal pulp.",
      specification: "Stainless steel filter, 700W",
      rating: 4.4
    },
    {
      id: 8,
      image: "/images/PlateSet.jpeg",
      name: "Plate Set",
      category: "Home Appliances",
      price: 1800,
      quantity: 5,
      description: "Elegant ceramic plates for daily use.",
      specification: "12-piece set, dishwasher safe",
      rating: 4.5
    }
  ]);

  const kitchenProducts = products.filter(p => p.category === "Kitchen Ware");
  const applianceProducts = products.filter(p => p.category === "Home Appliances");

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
    } else {
      alert("Product already in cart!");
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
    setCart(cart.filter(c => c.id !== productId));
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="mb-4">Product Management App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CartDetails cart={cart} onRemove={handleRemoveFromCart} />
                <AddProductForm onAdd={handleAddProduct} />
                <h3 className="mt-5">Kitchen Ware</h3>
                <ProductList
                  products={kitchenProducts}
                  onAddToCart={handleAddToCart}
                  onDelete={handleDeleteProduct}
                />
                <h3 className="mt-5">Home Appliances</h3>
                <ProductList
                  products={applianceProducts}
                  onAddToCart={handleAddToCart}
                  onDelete={handleDeleteProduct}
                />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductPage products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}
