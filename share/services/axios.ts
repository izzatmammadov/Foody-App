import axios from "axios";
const categoryBaseUrl = "/api";

const instanceAxios = axios.create({
  baseURL: categoryBaseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export type Form = {
  name: string;
  slug: string;
  img_url: string;
};

export const postCategory = async (form: Form) => {
  try {
    const response = await instanceAxios.post("/category", form);
    return response;
  } catch (err) {
    console.log(err);
  }
};

//? CLIENT REGISTER AND LOGIN

export type FormRegister = {
  email: string | undefined;
  password: string | undefined;
  fullname: string | undefined;
  username: string | undefined;
};

//& REGISTER
export const completeRegister = async (form: FormRegister) => {
  try {
    const response = await instanceAxios.post("/auth/signup", form);
    return response;
  } catch (error) {
    alert("Something get wrong!");
    console.log(error);
  }
};

//& LOGIN

export const completeLogin = async (form: FormRegister) => {
    try {
      const response = await instanceAxios.post("/auth/signin", form);
      return response;
    } catch (error) {
      alert("Something get wrong!");
      console.log(error);
    }
  };
