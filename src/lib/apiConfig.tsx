export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// USERS
export const USERS_ENDPOINT = {
  base: `${API_BASE_URL}/users/`,
  login: `${API_BASE_URL}/users/login`,
  list: `${API_BASE_URL}/users/users`,
  register: `${API_BASE_URL}/users/register`,
};

// CLIENTS
export const CLIENTS_ENDPOINT = {
  base: `${API_BASE_URL}/clients/`,
  list: `${API_BASE_URL}/clients/clients`,
  register: `${API_BASE_URL}/clients/client_register`,
};

// BRANDS
export const BRANDS_ENDPOINT = {
  base: `${API_BASE_URL}/brands/`,
  list: `${API_BASE_URL}/brands/brands`,
  register: `${API_BASE_URL}/brands/brand_register`,
};

// PRODUCTS
export const PRODUCTS_ENDPOINT = {
  base: `${API_BASE_URL}/products/`,
  list: `${API_BASE_URL}/products/products`,
  register: `${API_BASE_URL}/products/product_register`,
};
