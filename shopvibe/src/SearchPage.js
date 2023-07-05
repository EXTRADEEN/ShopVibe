import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "./firebase";
import Product from "./Product";

function SearchPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const snapshot = await db.collection("products")
          .where("name", ">=", searchTerm)
          .get();

        const results = snapshot.docs.map((doc) => doc.data());
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results: {searchTerm}</h2>
      <div className="searchPage__products">
        {searchResults.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
