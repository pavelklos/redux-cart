import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// import {
//   DECREASE,
//   INCREASE,
//   REMOVE,
//   CLEAR_CART,
//   GET_TOTAL,
//   GET_AMOUNT,
// } from './actions';
import reducer from './reducer';

// 'react-redux'
// Provider - wraps app, connect - used in components
import { Provider } from 'react-redux';

// [REDUX STUFF] ***************************************************************
// STORE   : stores data, think of state
// REDUCER : function that used to update store
//         : 2 ARGUMENTS - state, action
//         : state - old state / state before update
//         : action - what happened / what update
//         : RETURN updated state OR old state
// STORE   : getState() FUNCTION
// dispatch method : send actions to the store
// actions (objects) : MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)
// 1. IMPORT 'createStore' FUNCTION FROM THE REDUX
import { createStore } from 'redux';
// 2. SET VARIABLE 'initialStore'
// const initialStore = { count: 0, name: 'john' };
// const initialStore = {
//   cart: cartItems,
//   total: 0,
//   amount: 0,
// };
// 3. CREATE 'reducer' FUNCTION
//    DEFAULT state = undefined
//    DEFAULT action.type = "@@redux/INITe.x.e.t.q.5", "@@redux/INITl.2.x.b.t", ... RANDOM TYPE NAME

// 4. SET VARIABLE 'store' WHICH WILL HOLD THE VALUE
// const store = createStore(() => {});
// const store = createStore(reducer);
// const store = createStore(reducer, initialStore);
// const store = createStore(reducer);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// [REDUX STUFF] ***************************************************************
// console.log('█ <App> store.getState() █', store.getState());
console.log(store.getState());
// store.dispatch({ type: 'DECREASE' });
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: RANDOM }); // NOT EXISTING action.type
// store.dispatch({ type: RESET });
// store.dispatch({ type: CHANGE_NAME });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });
console.log(store.getState());

function App() {
  // cart setup

  return (
    // <main>
    <Provider store={store}>
      {/* <Navbar cart={store.getState()} /> */}
      <Navbar />
      {/* <CartContainer cart={cartItems} /> */}
      <CartContainer />
    </Provider>
    // </main>
  );
}

export default App;
