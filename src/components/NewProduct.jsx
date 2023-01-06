import React, { useState } from "react";
import { Button } from "antd";
import { postProduct } from "api/firebase";
import { imageUploader } from "api/uploader";

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = (input) => {
    const { value, name, files } = input.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }

    setProduct((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("envet :: ", event);
    imageUploader(file).then((res) => console.log(res));

    // const obj = {
    //   name: "name",
    //   price: "price",
    //   category: "category",
    //   description: "description",
    //   options: "options",
    // };

    // postProduct(obj);
  };

  return (
    <>
      <div className="text-lg font-semibold py-3 text-center">새 제품 등록</div>

      {file && <img src={URL.createObjectURL(file)} alt="new file"></img>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          onChange={handleChange}
          required
          placeholder="제품명"
        />
        <input
          type="text"
          name="price"
          value={product.price ?? ""}
          onChange={handleChange}
          required
          placeholder="가격"
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          onChange={handleChange}
          required
          placeholder="카테고리"
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          onChange={handleChange}
          required
          placeholder="제품 설명"
        />
        <input
          type="text"
          name="options"
          onChange={handleChange}
          value={product.options ?? ""}
          required
          placeholder="옵션 (콤마로 구분)"
        />
        <button className=" bg-red-400 text-white">제품 등록하기</button>
      </form>
    </>
  );
};

export default NewProduct;
