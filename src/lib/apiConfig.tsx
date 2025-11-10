export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ========== USERS ==========
export const USERS_ENDPOINT = {
  base: `${API_BASE_URL}/users/`,
  login: `${API_BASE_URL}/users/login`,
  list: `${API_BASE_URL}/users/`,
  register: `${API_BASE_URL}/users/`,
};

// ========== CLIENTS ==========
export const CLIENTS_ENDPOINT = {
  base: `${API_BASE_URL}/clients/`,
  list: `${API_BASE_URL}/clients/`,
  register: `${API_BASE_URL}/clients/`,
};

// ========== CATEGORIES ==========
export const CATEGORIES_ENDPOINT = {
  base: `${API_BASE_URL}/categories/`,
  list: `${API_BASE_URL}/categories/`,
  register: `${API_BASE_URL}/categories/`,
};

// ========== BRANDS ==========
export const BRANDS_ENDPOINT = {
  base: `${API_BASE_URL}/brands/`,
  list: `${API_BASE_URL}/brands/`,
  register: `${API_BASE_URL}/brands/`,
};

// ========== PRODUCTS ==========
export const PRODUCTS_ENDPOINT = {
  base: `${API_BASE_URL}/products/`,
  list: `${API_BASE_URL}/products/`,
  register: `${API_BASE_URL}/products/`,
};

// ========== BUDGETS ==========
export const BUDGETS_ENDPOINT = {
  base: `${API_BASE_URL}/budgets/`,
  list: `${API_BASE_URL}/budgets/`,
  register: `${API_BASE_URL}/budgets/`,
};
