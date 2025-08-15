import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with real loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader with fade-out */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50 transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Loader />
      </div>

      {/* Main content */}
      <Layout />
    </>
  );
};

export default App;
