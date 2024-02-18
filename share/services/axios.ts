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
  name: string | any;
  category_id: string | number | undefined;
  cuisine: string | undefined;
  address: string | undefined;
  delivery_price: number | any;
  img_url: string | undefined;
  delivery_min: string | number | undefined;
  id?: string | any;
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
export type ProductValues = {
  productName?: string;
  productPrice?: string;
  productDesc?: string;
  productRestaurant?: string;

  name?: string;
  description?: string;
  rest_id?: string;
  price?: string;
  img_url?: string;
};

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
export const updateProduct = async (id: string | any, data: any) => {
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
export interface userProfileType {
  name: string | undefined;
  username: string | undefined;
  img_url: string | undefined;
  phone: string;
  fullname: string | undefined;
  email: string | undefined;
  address: string | undefined;
}
export async function getProfileInfo() {
  // try {
  let item: any = localStorage.getItem("userInfo");
  let access_token = JSON.parse(item);
  // const userinf: any = localStorage.getItem("userInfo")
  // const access_token: any = JSON.parse(userinf).access_token
  // console.log(access_token);

  const response = await instanceAxios.get(`/auth/user/`, {
    headers: {
      Authorization: `Bearer ${access_token.access_token}`,
    },
  });
  console.log(response);

  return response;
  // } catch (err) {
  // console.log(err);
  // useReLogin(err)

  // }
}

export async function putProfileInfo(form: userProfileType) {
  try {
    let item: any = localStorage.getItem("userInfo");

    let access_token = JSON.parse(item);

    const response = await instanceAxios.get(`/auth/user/`, {
      data: form,

      headers: {
        Authorization: `Bearer ${access_token.access_token}`,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
}



export async function postProductForBasket(id:string|number) {
  try {
    let item: any = localStorage.getItem("userInfo");

    let access_token = JSON.parse(item);
console.log(access_token);

    const response = await instanceAxios.post(`/basket/add/`,{
      "product_id": id
    }, {
      // product_id:id,
      headers: {
        // product_id:id,
        Authorization: `Bearer ${access_token.access_token}`,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductForBasket() {
  try {
    let item: any = localStorage.getItem("userInfo");

    let access_token = JSON.parse(item);

console.log(access_token);

    const response = await instanceAxios.get(`/basket/`,{
      headers: {
        Authorization: `Bearer ${access_token.access_token}`,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
}




export async function deleteProductForBasket(id: string | number) {
  try {
    let item: any = localStorage.getItem("userInfo");
    let access_token = JSON.parse(item);

    console.log(access_token);

    const response = await instanceAxios.delete(`/basket/delete/`, {
      headers: {
        Authorization: `Bearer ${access_token.access_token}`,
      },
      data: {
        product_id: id,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
}
export async function clearProductForBasket(id: string | number) {
  try {
    let item: any = localStorage.getItem("userInfo");
    let access_token = JSON.parse(item);

    console.log(access_token);

    const response = await instanceAxios.delete(`/basket/clear/`, {
      headers: {
        Authorization: `Bearer ${access_token.access_token}`,
      },
      data: {
        "basket_id": id,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
}

