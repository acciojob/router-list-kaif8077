import React from "react";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        <li><Link to="/item1">Item 1</Link></li>
        <li><Link to="/item2">Item 2</Link></li>
        <li><Link to="/item3">Item 3</Link></li>
      </ul>
    </div>
  );
};

export default Item;
