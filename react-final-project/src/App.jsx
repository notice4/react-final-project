import React, { useState, useEffect } from "react";
import "./App.css";
import Categories from "./components/Categories";
import HeaderComponent from "./components/HeaderComponent";
import ProductFeatures from "./components/ProductFeatures";
import HeadphonesPage from "./components/HeadphonesPage";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/lomsadze123/audiophile-ecommerce-website/refs/heads/master/public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error with loading data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading data...</div>;
  }

  const heroProduct = products.find((p) => p.slug === "xx99-mark-two-headphones");
  const zx9Speaker = products.find((p) => p.slug === "zx9-speaker");
  const zx7Speaker = products.find((p) => p.slug === "zx7-speaker");
  const yx1Earphones = products.find((p) => p.slug === "yx1-earphones");

  return (
    <div className="app-wrapper">
      <HeaderComponent 
        heroProduct={heroProduct} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <main>
        {currentPage === "home" ? (
          <>
            <Categories />
            <ProductFeatures 
              zx9={zx9Speaker} 
              zx7={zx7Speaker} 
              yx1={yx1Earphones} 
            />
          </>
        ) : (
          <>
            <HeadphonesPage products={products} />
            
            <div className="category-page" style={{ paddingBottom: '120px' }}>
              <Categories />
            </div>
          </>
        )}
        
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;