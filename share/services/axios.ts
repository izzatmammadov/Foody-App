import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "/api";

const instanceAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export type Form = {
  name: string | undefined;
  slug: string | undefined;
  img_url: string | undefined;
};

export const postCategory = async (form: Form) => {
  try {
    const response = await instanceAxios.post("/category", form);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export interface formtype {
  name: string | undefined;
  category_id: string | number | undefined;
  cuisine: string | undefined;
  address: string | undefined;
  delivery_price: string | undefined;
  img_url: string | undefined;
  delivery_min: string | undefined;
}
//* Restourans

export async function updateRestourans(id: string, form: formtype) {
  try {
    const response = await instanceAxios.put(`/restuarants/${id}`, form);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getEditRestourans(id: string) {
  try {
    const response = await instanceAxios.get(`/restuarants/${id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteRestourans(id: string) {
  try {
    const response = await instanceAxios.delete(`/restuarants/${id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export const postRestourans = async (form: formtype) => {
  try {
    const response = await instanceAxios.post("/restuarants", form);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export async function getRestourans() {
  try {
    const response = await instanceAxios.get("/restuarants");
    return response;
  } catch (err) {
    console.log(err);
  }
}

//? CLIENT REGISTER AND LOGIN

export type FormRegister = {
  email: string | undefined;
  password: string | undefined;
  fullname?: string | undefined;
  username?: string | undefined;
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
    toast.warning("Check your information!");
    console.log(error);
  }
};
//& ADMIN OFFER
export type OfferValues = {
  titleOffer?: string | undefined;
  descOffer?: string | undefined;

  name?: string | undefined;
  description?: string | undefined;

  img_url?: string | undefined;
};

//* POST
export const createOffer = async (offerValues: OfferValues) => {
  try {
    const response = await instanceAxios.post("/offer", offerValues);
    return response;
  } catch (error) {
    toast.error("Can not added offer!");
    console.log(error);
  }
};

//* GET
export const getOffer = async () => {
  try {
    const response = await instanceAxios.get("/offer");
    return response;
  } catch (error) {
    toast.error("Can not get offer!");
    console.log(error);
  }
};

export const getEditOffer = async (id: string) => {
  try {
    const response = await instanceAxios.get(`/offer/${id}`);
    return response;
  } catch (error) {
    toast.error("Can not get offer!");
    console.log(error);
  }
};

//* PUT
export const putOffer = async (id: string, offerValues: OfferValues) => {
  try {
    const response = await instanceAxios.put(`/offer/${id}`, offerValues);
    return response;
  } catch (error) {
    toast.error("Can not update offer!");
    console.log(error);
  }
};

//* DELETE
export const deleteOffer = async (id: string) => {
  try {
    const response = await instanceAxios.delete(`/offer/${id}`);
    return response;
  } catch (error) {
    toast.error("Can not delete offer!");
    console.log(error);
  }
};

//& CATEGORIES
export async function getCategories() {
  try {
    const response = await instanceAxios.get("/category");
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteCategories(id: string) {
  try {
    const response = await instanceAxios.delete(`/category/${id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getEditCategories(id: string) {
  try {
    const response = await instanceAxios.get(`/category/${id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function updateCategories(id: string, form: Form) {
  try {
    const response = await instanceAxios.put(`/category/${id}`, form);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getOrderHistory() {
  try {
    const response = await instanceAxios.get(`/order/history`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

//& PRODUCTS

//* GET
export const getProducts = async () => {
  try {
    const response = await instanceAxios.get(`/products`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//* CREATE
export const createProduct = async (data: any) => {
  try {
    const response = await instanceAxios.post(`/products`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//* EDIT
export const updateProduct = async (id: string | number, data: any) => {
  try {
    const response = await instanceAxios.put(`/products/${id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//! DELETE
export const deleteProduct = async (id: number | string) => {
  try {
    const response = await instanceAxios.delete(`/products/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export async function getProfileInfo(id: string) {
  try {
    const response = await instanceAxios.get(`auth/user/${id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}
