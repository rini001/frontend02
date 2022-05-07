import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MysteryDetails = () => {
  const [data, setData] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/mystery/${userId}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);
  return (
    <div>
      <div>
        <img src={data.book_image} alt="" />
        <h1>{data.title}</h1>
        <h2>{data.author}</h2>
        <p>{data.description}</p>
        <h3>₹{data.price}</h3>
        <div>ISBN:{data.isbn}</div>
        <div>reviews:{data.reviews}</div>
      </div>
    </div>
  );
};
