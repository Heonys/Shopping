import axios from "axios";

export const uploader = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_CLOUDYNARY_PRESET);

  return axios
    .post(process.env.REACT_APP_CLOUDYNARY_URL, formData)
    .then((res) => res.data);
};
