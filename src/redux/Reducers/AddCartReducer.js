const INITIAL_STATE = {
  priceBasique: 14,
  priceClassique: 24,
  priceDecouvrez: 49,
  priceException: 70,

  stateSolde: 0,

  stateTotal:0,
  

  stateCartBasiqueQuantity: 0,
  stateCartBasiquePrice: 0,

  stateCartClassiqueQuantity: 0,
  stateCartClassiquePrice: 0,

  stateCartDecouvrezQuantity: 0,
  stateCartDecouvrezPrice: 0,

  stateCartExceptionQuantity: 0,
  stateCartExceptionPrice: 0,

  // stateTotal: 0,
};
function AddCartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "TOTAL": {
      return {
        ...state,
        stateTotal: action.payload,
      };
    }
    
    case "SOLDE": {
      return {
        ...state,
        stateSolde: action.payload,
      };
    }
    
    case "ADDCART_BASIQUE_QUANTITY": {
      return {
        ...state,
        stateCartBasiqueQuantity: action.payload,
      };
    }
    case "ADDCART_BASIQUE_PRICE": {
      return {
        ...state,
        stateCartBasiquePrice: action.payload,
      };
    }
    case "ADDCART_CLASSIQUE_QUANTITY": {
      return {
        ...state,
        stateCartClassiqueQuantity: action.payload,
      };
    }
    case "ADDCART_CLASSIQUE_PRICE": {
      return {
        ...state,
        stateCartClassiquePrice: action.payload,
      };
    }
    case "ADDCART_DECOUVREZ_QUANTITY": {
      return {
        ...state,
        stateCartDecouvrezQuantity: action.payload,
      };
    }
    case "ADDCART_DECOUVREZ_PRICE": {
      return {
        ...state,
        stateCartDecouvrezPrice: action.payload,
      };
    }
    case "ADDCART_EXCEPTION_QUANTITY": {
      return {
        ...state,
        stateCartExceptionQuantity: action.payload,
      };
    }
    case "ADDCART_EXCEPTION_PRICE": {
      return {
        ...state,
        stateCartExceptionPrice: action.payload,
      };
    }
    default:
    // do nothing
  }
  return state;
}
export default AddCartReducer;

// const INITIAL_STATE = {
//     cart: 0,
//   };
//   function AddCartReducer(state = INITIAL_STATE, action) {
//     switch (action.type) {
//       case "ADDCART": {
//         return {
//           ...state,
//           cart: action.payload,
//         };
//       }

//       default:
//       // do nothing
//     }
//     return state;
//   }
//   export default AddCartReducer;
