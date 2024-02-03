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
    "name": string|undefined,
    "slug": string|undefined,
    "img_url": string | undefined
  }



export const postCategory = async (form: Form) => {
    try {
    const response = await instanceAxios.post("/category",form);
    return response;
        
    } catch (err) {
        console.log(err);
        
    }
  };


