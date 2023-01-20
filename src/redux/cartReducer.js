// import { ADD_CART, REMOVE, REMOVE_ITEM } from "./type";

const initialStore = {
  carts: [],
  solde: 0,
  codeSolde: ""
};

// reducer
function cartReducer(state = initialStore, action) {
  switch (action.type) {
    case "SOLDE" :
      return {
        ...state,
        solde:  action.payload,
        //---------------------------
        


        
        //-------------------------------
      }
      case "CODE_SOLDE" :
      return {
        ...state,
        codeSolde: action.payload,
      }
    
    case "ADD_CART":
      // return {
      //   ...state,
      //   carts: [...state.carts, action.payload],
      // }

      // const itemIndex = state.carts.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemIndex >= 0) {
      //   state.carts[itemIndex].qty += 1;
      // }
      // else {
      //   const temp = { ...action.payload, qty: 1  };
      //   return {
      //     ...state,
      //     carts: [...state.carts, temp],
      //   };
      // }

      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // state.carts[itemIndex].qty += 1;
        state.carts[itemIndex].qty += 0;
      } 
      else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
      break;

    case "ADD_ITEM":
      const itemIndex_incr = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_incr].qty >= 1) {
        const add_item = (state.carts[itemIndex_incr].qty += 1);
        console.log([...state.carts, add_item]);
        return {
          ...state,
          carts: [...state.carts],
        };
      }
      break;

    case "REMOVE":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "REMOVE_ITEM":
      const itemIndex_desc = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_desc].qty >= 2) {
        const delete_item = (state.carts[itemIndex_desc].qty -= 1);
        console.log([...state.carts, delete_item]);
        return {
          ...state,
          carts: [...state.carts],
        };
      }
      // else if (state.carts[itemIndex_desc].qty === 1) {
      //   const data = state.carts.filter((el) => el.id !== action.payload.id);
      //   return {
      //     ...state,
      //     carts: data,
      //   };
      // }
      break;

    case "PRICE_ITEM": {
      return {
        ...state,
        // cardPrice: [...state.carts, action.payload],
        cardPrice: action.payload,
      };
    }

    default: //doo nothing
  }
  return state;
}
export default cartReducer;


