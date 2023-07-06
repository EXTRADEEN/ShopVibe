import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";
import { electronicsProducts } from "./Electronics";
import { sportsProducts } from "./Sports";
import { toolsProducts } from "./Tools";

function SearchPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = () => {
      let results = [];

      if (searchTerm) {
        // Filter electronics products
        const electronicsResults = electronicsProducts.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Filter sports products
        const sportsResults = sportsProducts.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Filter tools products
        const toolsResults = toolsProducts.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Combine the results
        results = [...electronicsResults, ...sportsResults, ...toolsResults];
      }

      setSearchResults(results);
    };

    fetchSearchResults();
  }, [searchTerm]);

  // Group the search results into chunks of four products per row
  const groupedSearchResults = Array.from(
    { length: Math.ceil(searchResults.length / 4) },
    (_, index) => searchResults.slice(index * 4, (index + 1) * 4)
  );

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__section">
          <h2 className="home__sectionTitle">Search Results: {searchTerm}</h2>
          {groupedSearchResults.map((row, rowIndex) => (
            <div className="home__row" key={rowIndex}>
              {row.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
