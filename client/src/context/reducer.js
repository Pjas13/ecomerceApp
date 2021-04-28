//Initial value of the basket
export const initialState = {
  basket: [],
};

//Reducers to deal whit add and delete a product to the basket
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }else{
          console.log("error")
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
