import styled from "styled-components";
import React, { useState } from "react";
import Nav from "./Nav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 3;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  #burger-lines {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ffffff" : "#003049")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const Burger = (props) => {
  const [open, setOpen] = useState(false);
  const burgerClick = () => {
    setOpen(!open);
    props.setBurger((curr) => !curr);
  };
  return (
    <>
      <StyledBurger open={open} onClick={burgerClick}>
        <div id="burger-lines"></div>
        <div id="burger-lines"></div>
        <div id="burger-lines"></div>
      </StyledBurger>
    </>
  );
};

export default Burger;
