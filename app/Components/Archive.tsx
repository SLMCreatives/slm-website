import React from "react";
import "/app/globals.css";
import { data } from "../blog/(Post)/posts";
import Cards from "./Card";

const Archive = () => {
  const mappedData = data.map((item) => {
    return <Cards key={item.id} item={item} />;
  });
  return <div className="App">{mappedData}</div>;
};

export default Archive;
