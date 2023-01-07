import React, { useState, useEffect } from "react";
import { getProductById, addCart } from "api/firebase";

import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [size, setSize] = useState("");
  const [productList, setProductList] = useState();
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    getProductById(id).then((res) => setProductList(res));
  }, [id]);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const onCart = () => {
    addCart({ ...productList, options: size }, user) //
      .then(() => navigate("/"));
  };

  return (
    <section>
      {productList && (
        <>
          <div>
            {"> "}
            {productList.category}
          </div>

          <article className="flex flex-row">
            <div className="basis-1/2 flex justify-center items-start">
              <img className="h-3/4" src={productList.image} alt="" />
            </div>
            <div className="basis-1/2 p-3 ml-3 flex flex-col space-y-2 ">
              <p className="text-2xl font-bold">{productList.title}</p>
              <p className="text-xl font-bold pb-2 border-b-2 border-[#ddd]">
                {productList.price} 원
              </p>
              <p className="pb-5">{productList.description}</p>

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
                  {productList.options.map((op, index) => {
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
      )}
    </section>
  );
};

export default ProductDetail;
