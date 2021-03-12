import React from "react";
import "./Sort.css";

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <lable htmlFor="sort" onChange={handleChange}>
        <option className="option" value="make-ascending">
          &nbsp;Alphabetically, A-Z &nbsp;
        </option>
        <option value="make-descendnig">&nbsp;Alphabetically, Z-A&nbsp;</option>
        <option value="price-ascending">&nbsp;Price, low to high&nbsp;</option>
        <option value="price-descending">
          &nbsp;Price, high to low &nbsp;
        </option>
      </lable>
    </form>
  );
};

export default Sort;
