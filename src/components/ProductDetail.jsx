import React, { useState, useContext } from "react";
import { CartContext } from "context/CartContext";

import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
} from "@mui/material";

const ProductDetail = () => {
  const [size, setSize] = useState("");
  const { setCount } = useContext(CartContext);

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <section>
      <div>{">"}여성</div>

      <article className="flex flex-row">
        <div className="basis-1/2 flex justify-center items-start">
          <img className="h-3/4" src="/assets/1.webp" alt="" />
        </div>
        <div className="basis-1/2 p-3 ml-3 flex flex-col space-y-2 ">
          <p className="text-2xl font-bold">프린트 코튼 스웻 셔츠</p>
          <p className="text-xl font-bold pb-2 border-b-2 border-[#ddd]">
            120,000 원
          </p>
          <p className="pb-5">
            더글러스 코플랜드의 프린트를 더한 후드 코튼 스웻셔츠
          </p>

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
              <MenuItem value={"XS"}>XS</MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
              <MenuItem value={"XL"}>XL</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={() => setCount((prev) => prev + 1)}
            variant="contained"
          >
            장바구니에 추가
          </Button>
        </div>
      </article>
    </section>
  );
};

export default ProductDetail;
