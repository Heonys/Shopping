import React, { useState } from "react";
import useCarts from "hooks/useCarts";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { addOrUpdateCartMutation } = useCarts();
  const navigate = useNavigate();
  const {
    state: {
      product,
      product: { category, id, image, price, title, description, options },
    },
  } = useLocation();
  const [size, setSize] = useState(options && options[0]);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const onCart = () => {
    addOrUpdateCartMutation
      .mutate({ ...product, options: size, quantity: 1 }) //
      .then(() => navigate("/"));
  };

  return (
    <section>
      <>
        <div>
          {"> "}
          {category}
        </div>

        <article className="flex flex-col md:flex-row">
          <div className="basis-1/2 flex justify-center items-start">
            <img className="h-3/4" src={image} alt="" />
          </div>
          <div className="basis-1/2 p-3 ml-3 flex flex-col space-y-2 ">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-xl font-bold pb-2 border-b-2 border-[#ddd]">
              {price} 원
            </p>
            <p className="pb-5">{description}</p>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Option</InputLabel>
              <Select
                MenuProps={{ disableScrollLock: true }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={size}
                label="Option"
                onChange={handleChange}
              >
                {options.map((op, index) => {
                  return (
                    <MenuItem key={index} value={op}>
                      {op}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <Button onClick={onCart} variant="contained">
              장바구니에 추가
            </Button>
          </div>
        </article>
      </>
    </section>
  );
};

export default ProductDetail;
