import React, { useState, useEffect } from "react";
import "./App.css";
import Categories from "./components/Categories";
import HeaderComponent from "./components/HeaderComponent";
import ProductFeatures from "./components/ProductFeatures";
import HeadphonesPage from "./components/HeadphonesPage";
import SpeakersPage from "./components/SpeakersPage";
import EarphonesPage from "./components/EarphonesPage";
import About from "./components/About";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const { data: products, loading } = useFetch("http://localhost:3000/api/products");

  if (loading) {
    return <div className="loading">Loading data...</div>;
  }

  const heroProduct = products.find((p) => p.slug === "xx99-mark-two-headphones");
  const zx9Speaker = products.find((p) => p.slug === "zx9-speaker");
  const zx7Speaker = products.find((p) => p.slug === "zx7-speaker");
  const yx1Earphones = products.find((p) => p.slug === "yx1-earphones");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Categories />
            <ProductFeatures 
              zx9={zx9Speaker} 
              zx7={zx7Speaker} 
              yx1={yx1Earphones} 
            />
          </>
        );
      case "headphones":
        return (
          <>
            <HeadphonesPage products={products} />
            <div className="category-page" style={{ paddingBottom: '120px' }}>
              <Categories />
            </div>
          </>
        );
      case "speakers":
        return (
          <>
            <SpeakersPage products={products} />
            <div className="category-page" style={{ paddingBottom: '120px' }}>
              <Categories />
            </div>
          </>
        );
      case "earphones":
        return (
          <>
            <EarphonesPage products={products} />
            <div className="category-page" style={{ paddingBottom: '120px' }}>
              <Categories />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-wrapper">
      <HeaderComponent 
        heroProduct={heroProduct} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderContent()}
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;