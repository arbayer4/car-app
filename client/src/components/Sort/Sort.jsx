import React from "react";
import "./Sort.css";

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort"></label>
      <select className="sort" onChange={handleChange}>
        <option value="" className="no-sort">
          Sort by:
        </option>
        <option className="option" value="make-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value="make-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
        <option value="price-ascending">
          &nbsp; Price, low to high &nbsp;
        </option>
        <option value="price-descending">
          &nbsp; Price, high to low &nbsp;
        </option>
      </select>
    </form>
  );
};

export default Sort;
