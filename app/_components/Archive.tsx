import React from "react";
import { data } from "../portfolio/(Post)/posts";
import Cards from "./Card";

const Archive = () => {
  const mappedData = data.map((item) => {
    return <Cards key={item.id} item={item} />;
  });
  return <div className="App">{mappedData}</div>;
};

export default Archive;
