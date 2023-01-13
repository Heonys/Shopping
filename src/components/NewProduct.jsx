import React, { useState } from "react";
import { imageUploader } from "api/uploader";
import useProduct from "hooks/useProducts";

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isuploading, setIsUploading] = useState();
  const [success, setSuccess] = useState();
  const { addMutation } = useProduct();

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
    setIsUploading(true);
    imageUploader(file).then((url) => {
      addMutation.mutate(
        { product, url },
        {
          onSuccess: () => {
            setSuccess("등록되 었습니다");
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          },
        }
      );
    });
  };

  return (
    <section className="w-full text-center">
      <div className="text-lg font-bold py-3">새 제품 등록</div>

      {success && <p className="m-2">🎁{success}</p>}

      {file && (
        <img
          className="w-96 mx-auto"
          src={URL.createObjectURL(file)}
          alt="new file"
        ></img>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-12">
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
        <button className=" bg-red-400 text-white" disabled={isuploading}>
          {isuploading ? "업로드중..." : "제품 등록하기"}
        </button>
      </form>
    </section>
  );
};

export default NewProduct;
