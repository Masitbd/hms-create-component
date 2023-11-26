interface Product {
  id: string;
  testName: string;
  qtantity: number;
}

interface State {
  cart: Product[];
}

interface Action {
  type: string;
  payload: Product;
}

const initialState: State = {
  cart: [],
};
const productReducer = (state: State = initialState, action: Action) => {
  const selectedProduct = state?.cart.find(
    (product) => product.testName === action.payload.testName
  );

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
