import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import { electronicsProducts } from "./Electronics";
import { sportsProducts } from "./Sports";
import { toolsProducts } from "./Tools";

function Home() {
  const [{ basket }, dispatch] = useStateValue();

  const [electronicsRandomProducts, setElectronicsRandomProducts] = useState([]);
  const [sportsRandomProducts, setSportsRandomProducts] = useState([]);
  const [toolsRandomProducts, setToolsRandomProducts] = useState([]);

  useEffect(() => {
    const electronicsNewRandomProducts = getRandomProducts(8, electronicsProducts);
    const sportsNewRandomProducts = getRandomProducts(8, sportsProducts);
    const toolsNewRandomProducts = getRandomProducts(8, toolsProducts);
    setElectronicsRandomProducts(electronicsNewRandomProducts);
    setSportsRandomProducts(sportsNewRandomProducts);
    setToolsRandomProducts(toolsNewRandomProducts);
  }, []);

  function getRandomProducts(count, products) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <div className="home">
      <div className="home__container">
        <img className="slide__image" src="/home_img/home1.png" alt="" />

        <div className="home__section">
          <h2 className="home__sectionTitle">Electronics</h2>
          <div className="home__row">
            {electronicsRandomProducts.slice(0, 4).map((product) => (
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
          <div className="home__row">
            {electronicsRandomProducts.slice(4, 8).map((product) => (
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
        </div>

        <div className="home__section">
          <h2 className="home__sectionTitle">Sports</h2>
          <div className="home__row">
            {sportsRandomProducts.slice(0, 4).map((product) => (
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
          <div className="home__row">
            {sportsRandomProducts.slice(4, 8).map((product) => (
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
        </div>

        <div className="home__section">
          <h2 className="home__sectionTitle">Tools</h2>
          <div className="home__row">
            {toolsRandomProducts.slice(0, 4).map((product) => (
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
          <div className="home__row">
            {toolsRandomProducts.slice(4, 8).map((product) => (
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
        </div>
      </div>
    </div>
  );
}

export default Home;
