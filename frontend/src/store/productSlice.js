import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productsListFromBackend: [],
    resetSelectComposant: false,
    categorieWithOptionSelectedForString: [],
    categorieWithOptionSelectedForBall: [],
    categorieWithOptionSelectedForAccessories: [],
  },
  reducers: {
    setResetSelectComposant: (state) => {
      state.resetSelectComposant = !state.resetSelectComposant;
    },
    setProductsListFromBackend: (state, action) => {
      state.productsListFromBackend = action.payload;
    },
    setCategorieWithOptionSelectedForString: (state, action) => {
      state.categorieWithOptionSelectedForString = action.payload;
    },
    setCategorieWithOptionSelectedForBall: (state, action) => {
      state.categorieWithOptionSelectedForBall = action.payload;
    },
    setCategorieWithOptionSelectedForAccessories: (state, action) => {
      state.categorieWithOptionSelectedForAccessories = action.payload;
    },
  },
});

export const {
  setResetSelectComposant,
  setProductsListFromBackend,
  setCategorieWithOptionSelectedForString,
  setCategorieWithOptionSelectedForBall,
  setCategorieWithOptionSelectedForAccessories,
} = productSlice.actions;

export default productSlice.reducer;
