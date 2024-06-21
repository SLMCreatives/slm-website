import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const MasonryImageList = () => {
  return (
    <Box sx={{ width: 1000, height: 450 }}>
      <ImageList
        variant="masonary"
        cols={3}
        gap={10}
        className="justify-center items-center"
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MasonryImageList;

const itemData = [
  {
    img: "./content/content_10.png",
    title: "Bed",
  },
  {
    img: "./content/content_7.png",
    title: "Books",
  },
  {
    img: "./content/content_8.png",
    title: "Kitchen",
  },
  {
    img: "./content/content_6.png",
    title: "Blinds",
  },
  {
    img: "./content/content_2.png",
    title: "Chairs",
  },
  {
    img: "./content/content_5.png",
    title: "Laptop",
  },
  {
    img: "./content/content_4.png",
    title: "Doors",
  },
  {
    img: "./content/content_9.png",
    title: "Coffee",
  },
  {
    img: "./content/content_3.png",
    title: "Storage",
  },
];
