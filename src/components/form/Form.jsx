import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [products, setProducts] = useState({
    title: "",
    price: "",
    image: "",
  });

  function handleValues(e) {
    if (e.target.name === "price") {
      let obj = { ...products, [e.target.name]: Number(e.target.value) };
      setProducts()
      //начни сдесь!!!
    }else{
      let obj = { ...products, [e.target.name]: (e.target.value) };

    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField
          name="title"
          id="outlined-basic"
          label="title"
          variant="outlined"
        />
        <TextField
          name="price"
          id="outlined-basic"
          label="price"
          variant="outlined"
        />
        <TextField
          name="image"
          id="outlined-basic"
          label="image"
          variant="outlined"
        />
        <Button variant="contained">create</Button>
      </Box>
    </Box>
  );
};

export default Form;
