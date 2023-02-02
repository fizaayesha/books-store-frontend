import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Add = () => {
  const [book, setBook] = useState({
    // id: "",
    title: "",
    description: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <h1>Add new book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="description"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
export default Add;
