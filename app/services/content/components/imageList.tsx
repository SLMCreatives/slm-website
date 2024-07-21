import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const MasonryImageList = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <ImageList
        variant="masonry"
        cols={9}
        gap={10}
        className="justify-center items-center flex overflow-hidden"
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ width: "10rem", height: "auto" }}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              className="hover:scale-200 hover:z-10 transition-all duration-300 ease-in-out"
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
    img: "../content/content_10.png",
    title: "Bed",
  },
  {
    img: "../content/content_7.png",
    title: "Books",
  },
  {
    img: "../content/content_8.png",
    title: "Kitchen",
  },
  {
    img: "../content/content_6.png",
    title: "Blinds",
  },
  {
    img: "../content/content_2.png",
    title: "Chairs",
  },
  {
    img: "../content/content_5.png",
    title: "Laptop",
  },
  {
    img: "../content/content_4.png",
    title: "Doors",
  },
  {
    img: "../content/content_9.png",
    title: "Coffee",
  },
  {
    img: "../content/content_3.png",
    title: "Storage",
  },
];
