import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({match}) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [data, setData] = useState([]);
  const fetchItem = async () => {
    const item = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const data = await item.json();
    // console.log(id);
    setData(data);
  };

  return <div>{data.title}</div>;
};

export default ItemDetail;
