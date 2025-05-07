import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState = {
  value: {
    title: "",
    description: "",
    manufacturer: "All Brands",
    scale: "All Scales",
    category: "All Categories",
    collection: "",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    id: 0,
    imgs: { thumbnails: [], previews: [] },
  },
} as InitialState;

export const productDetails = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    updateproductDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
