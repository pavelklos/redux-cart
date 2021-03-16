import {
  DECREASE,
  INCREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from './actions';
import cartItems from './cart-items';

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

function reducer(state = initialStore, action) {
  // console.log('█ <App> reducer(state, action) █', { state, action });
  console.log(`█ ${action.type} █`, { state, action });

  const { type, payload } = action;
  let tempCart = [];

  switch (type) {
    case CLEAR_CART:
      return { ...state, cart: [], total: 0, amount: 0 };

    // case DECREASE:
    //   if (payload.amount === 1) {
    //     tempCart = state.cart.filter((item) => item.id !== payload.id);
    //   } else {
    //     tempCart = state.cart.map((item) => {
    //       if (item.id === payload.id) {
    //         item = { ...item, amount: item.amount - 1 }; // !!! DO NOT MUTATE : COPY
    //       }
    //       return item;
    //     });
    //   }
    //   return { ...state, cart: tempCart };

    case DECREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          item = { ...item, amount: item.amount - 1 }; // !!! DO NOT MUTATE : COPY
        }
        return item;
      });
      return { ...state, cart: tempCart };

    // case INCREASE:
    //   tempCart = state.cart.map((item) => {
    //     if (item.id === payload.id) {
    //       // item.amount = item.amount + 1; // MUTATE
    //       item = { ...item, amount: item.amount + 1 }; // !!! DO NOT MUTATE : COPY
    //     }
    //     return item;
    //   });
    //   return { ...state, cart: tempCart };

    case INCREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          // item.amount = item.amount + 1; // MUTATE
          item = { ...item, amount: item.amount + 1 }; // !!! DO NOT MUTATE : COPY
        }
        return item;
      });
      return { ...state, cart: tempCart };

    case REMOVE:
      tempCart = state.cart.filter((item) => item.id !== payload.id);
      return { ...state, cart: tempCart };

    case GET_TOTALS:
      let { amount, total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { amount, price } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += amount * price;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, amount: amount, total: total };

    case TOGGLE_AMOUNT:
      tempCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          if (payload.toggle === 'inc') {
            item = { ...item, amount: item.amount + 1 }; // !!! DO NOT MUTATE : COPY
          }
          if (payload.toggle === 'dec') {
            item = { ...item, amount: item.amount - 1 }; // !!! DO NOT MUTATE : COPY
          }
        }
        return item;
      });
      return { ...state, cart: tempCart };

    default:
      return state;
  }

  //   if (action.type === CLEAR_CART) {
  //     return { ...state, cart: [], total: 0, amount: 0 };
  //   }

  //   if (action.type === DECREASE) {
  //     // state.count = state.count - 1; // DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)
  //     // return { count: state.count - 1 };
  //     return { ...state, count: state.count - 1, name: 'anna' }; // SPREAD OPERATOR : NOT MUTATING
  //   }

  //   if (action.type === INCREASE) {
  //     return { ...state, count: state.count + 1 };
  //   }

  // if (action.type === RESET) {
  //   return { ...state, count: 0 };
  // }
  // if (action.type === CHANGE_NAME) {
  //   return { ...state, name: 'bobo' };
  // }

  //   return state;
}

export default reducer;
