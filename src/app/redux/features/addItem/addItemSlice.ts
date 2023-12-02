import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  testName: string;
  quantity: number;
  remark: string;
}

interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product.testName === action.payload.testName
      );
      console.log("cart action", action.payload);
      if (existing) {
        console.log("Duplicate product found");
      } else {
        state.products.push({ ...action.payload });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

/* const productReducer = (state: State = initialState, action: Action) => {
  const selectedProduct = state?.cart.find(
    (product) => product.testName === action.payload.testName
  );

  console.log("card", state.cart);
  switch (action.type) {
    case "ADD_TO_CART":
      if (selectedProduct) {
        // Product already in the cart, handle duplication (e.g., show a message)
        console.log("Duplicate product: ", action.payload.testName);
        // You can also choose to throw an error or dispatch another action for UI feedback
        return state;
      }
      //console.log("My payload", action.payload);
      // Product not in the cart, proceed with adding it
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qtantity: 1 }],
      };

    default:
      return state;
  }
};

export default productReducer;
 */
