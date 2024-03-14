import React, { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setloading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancelled", error);
          return;
        }
        setError(true);
        setloading(false);
      }
    })();
    // cleanup
    return () => {
      return controller.abort();
    };
  }, [search]);

  return (
    <div>
      <h1>Get All Products</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1> Loading...</h1>}
      {error && <h1> Something Went Wrong</h1>}

      <h1>Number of Products: {products.length}</h1>
    </div>
  );
}

export default App;
