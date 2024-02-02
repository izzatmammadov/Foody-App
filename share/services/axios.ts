import axios from "axios";
const categoryBaseUrl ="/api"

const instanceAxios = axios.create({
    baseURL: categoryBaseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});
export type Form={
    "name": string,
    "slug": string,
    "img_url": string
  }

export const postCategory = async (form: Form) => {
    try {
    const response = await instanceAxios.post("/category",form);
    return response;
        
    } catch (err) {
        console.log(err);
        
    }
  };


