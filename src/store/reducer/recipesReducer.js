import { createSlice } from "@reduxjs/toolkit";
import {
  getDataCategoryRecipesCall,
  getDataDetailRecipesCall,
  getDataRecipesCall,
  searchDataRecipesCall,
} from "../action/recipesAction";

const initialState = {
  data: [],
  isLoading: true,
  category: [],
  detail: [],
  detailIngredient: [],
  detailInstruction: [],
};
export const recipesReducer = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      getDataRecipesCall.fulfilled,
      (state, action) => {
        state.data = action.payload.data.recipes;
      },
      builder.addCase(searchDataRecipesCall.fulfilled, (state, action) => {
        state.data = action.payload.data.recipes;
      }),
      builder.addCase(getDataCategoryRecipesCall.fulfilled, (state, action) => {
        state.category = action.payload.data.recipes;
      }),
      builder.addCase(getDataDetailRecipesCall.fulfilled, (state, action) => {
        (state.detail = action.payload.data),
          (state.detailIngredient = action.payload.data.ingredients),
          (state.detailInstruction = action.payload.data.instructions);
      })
    );
  },
});

export default recipesReducer.reducer;
