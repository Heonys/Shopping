import React, { useState } from "react";
import { uploader } from "api/uploader";
import { addProduct } from "api/firebase";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    uploader(image)
      .then((url) => {
        addProduct(product, url);
      })
      .then(navigate("/"));
  };

  const handleChange = ({ target }) => {
    const { name, value, files } = target;
    if (name === "file") {
      setImage(files && files[0]);
      return;
    }
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      {image && (
        <div className="flex justify-center">
          <img src={URL.createObjectURL(image)} alt="choes" />
        </div>
      )}
      <form className="flex flex-col px-12" onSubmit={onSubmit}>
        <input
          name="file"
          type="file"
          accept="image/*"
          required
          onChange={handleChange}
        />
        <input
          name="title"
          placeholder="타이틀"
          type="text"
          required
          onChange={handleChange}
          value={product.title || ""}
        />
        <input
          name="price"
          placeholder="가격"
          type="text"
          required
          onChange={handleChange}
          value={product.price || ""}
        />
        <input
          name="tag"
          placeholder="태그"
          type="text"
          required
          onChange={handleChange}
          value={product.tag || ""}
        />
        <input
          name="options"
          placeholder="옵션 (콤마(,)로 구분)"
          type="select"
          required
          onChange={handleChange}
          value={product.options || ""}
        />
        <button className="bg-red-400 mt-2 p-1 text-white font-semibold">
          제품 등록하기
        </button>
      </form>
    </section>
  );
};

export default NewProduct;
