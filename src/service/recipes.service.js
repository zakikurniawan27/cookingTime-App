import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const fetchDataRecipes = async () => {
  const data = await axios.get(`${BASE_URL}/recipes`);
  return data;
};

export const fetchDataCategoryRecipes = async (query) => {
  const data = await axios.get(`${BASE_URL}/recipes/tag/${query}`);
  return data;
};
