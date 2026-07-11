import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
import { Routes, Route, useParams, useNavigate, Navigate } from "react-router-dom";
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

const Home = ({ zx9Speaker, zx7Speaker, yx1Earphones }) => (
  <>
    <Categories />
    <ProductFeatures 
      zx9={zx9Speaker} 
      zx7={zx7Speaker} 
      yx1={yx1Earphones} 
    />
  </>
);

const CategoryPageWrapper = ({ products }) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const { isAuthenticated } = useContext(AuthContext); 
  
  if (categoryId === 'earphones' && !isAuthenticated) {
    alert("You need to be logged in to view Earphones! Redirecting to Home.");
    return <Navigate to="/" replace />;
  }

  let content = null;
  switch (categoryId) {
    case "headphones":
      content = <HeadphonesPage products={products} />;
      break;
    case "speakers":
      content = <SpeakersPage products={products} />;
      break;
    case "earphones":
      content = <EarphonesPage products={products} />;
      break;
    default:
      content = <div style={{padding: '100px', textAlign: 'center'}}>Category not found</div>;
  }

  return (
    <>
      {content}
      <div className="category-page" style={{ paddingBottom: '120px' }}>
        <Categories />
      </div>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <button onClick={() => navigate(-1)} className="btn" style={{ background: '#000', color: '#fff' }}>
          Go Back
        </button>
      </div>
    </>
  );
};

const ContentWrapper = ({ children }) => {
  return (
    <div className="content-wrapper" style={{ width: '100%' }}>
      {children}
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data: products, loading, error } = useFetch("/api/products");

  if (loading) {
    return <div className="loading" style={{ textAlign: 'center', padding: '50px' }}>Loading data...</div>;
  }

  if (error) {
    return (
      <div className="error" style={{ textAlign: 'center', color: 'red', padding: '50px' }}>
        <h2>Oops! Something went wrong.</h2>
        <p>Error loading data: {error.message}</p>
      </div>
    );
  }

  const heroProduct = products.find((p) => p.slug === "xx99-mark-two-headphones");
  const zx9Speaker = products.find((p) => p.slug === "zx9-speaker");
  const zx7Speaker = products.find((p) => p.slug === "zx7-speaker");
  const yx1Earphones = products.find((p) => p.slug === "yx1-earphones");

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="app-wrapper">
        <HeaderComponent heroProduct={heroProduct} />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Home zx9Speaker={zx9Speaker} zx7Speaker={zx7Speaker} yx1Earphones={yx1Earphones} />} 
            />
            <Route 
              path="/category/:categoryId" 
              element={<CategoryPageWrapper products={products} />} 
            />
          </Routes>
          <ContentWrapper>
            <About />
          </ContentWrapper>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;