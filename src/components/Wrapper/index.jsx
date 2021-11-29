import { Container } from "@mui/material";
import React from "react";
import Header from "../Header";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
    </div>
  );
};

export default Wrapper;
