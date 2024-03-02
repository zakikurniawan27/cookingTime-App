import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchDataCategoryRecipes,
  fetchDataDetailRecipes,
  fetchDataRecipes,
  searchRecipes,
} from "../../service/recipes.service";

export const getDataRecipesCall = createAsyncThunk(
  "recipes/getDataRecipes",
  async () => {
    const data = await fetchDataRecipes();
    return data;
  }
);

export const searchDataRecipesCall = createAsyncThunk(
  "recipes/searchDataRecipes",
  async (query) => {
    const data = await searchRecipes(query);
    return data;
  }
);

export const getDataCategoryRecipesCall = createAsyncThunk(
  "recipes/getDataCategoryRecipes",
  async (q) => {
    const data = await fetchDataCategoryRecipes(q);
    return data;
  }
);

export const getDataDetailRecipesCall = createAsyncThunk(
  "recipes/getDataDetailRecipes",
  async (id) => {
    const data = await fetchDataDetailRecipes(id);
    return data;
  }
);
