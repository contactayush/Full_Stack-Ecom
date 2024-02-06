import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
function valuetext(value) {
  return `$ ${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = useState([0, 300]);

  const handleChange = (event) => {
    event.preventDefault();
    setValue(value);
    console.log(value);
  };
``
  return (
    <Box sx={{ width: 247, height: 43 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{ width: 247, borderRadius: 20, color: "#000000" }}
      />
    </Box>
  );
}
