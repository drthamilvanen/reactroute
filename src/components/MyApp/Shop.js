import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const navStyle = {
    fontSize: "3",
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const [data, setData] = useState([]);
  const fetchItems = async () => {
    const item = await fetch("https://fakestoreapi.com/products");
    const data = await item.json();
    console.log(data)
    setData(data);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Shop;
