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
    //(product) => console.log(product)
  );

  console.log(selectedProduct);

  switch (action.type) {
    case "ADD_TO_CART":
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product.testName !== selectedProduct.testName
        );
        console.log(selectedProduct);
        selectedProduct.qtantity = selectedProduct.qtantity + 1;
        //console.log(typeof selectedProduct.qtantity);

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };

    default:
      return state;
  }
};

export default productReducer;
