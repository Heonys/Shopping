export const imageUploader = async (file) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

  fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => console.log("??", data.url));
};
