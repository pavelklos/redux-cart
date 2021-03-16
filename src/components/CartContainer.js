import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { CLEAR_CART, GET_TOTALS } from '../actions';

const CartContainer = ({ cart = [], total, dispatch }) => {
  // console.log('█ <CartContainer> props.cart █', cart);

  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
    // },); // ??? ON INITIAL RENDER + ANY CHANGES IN THE PROPS
  }, [cart, dispatch]); // ON INITIAL RENDER + DEPENDENCY [cart, dispatch]

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            {/* total <span>$0.00</span> */}
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart,
//   };
// };
// function mapStateToProps(store) {
function mapStateToProps(state) {
  const { cart, total } = state;
  return {
    // cart: store.cart,
    // cart: state.cart, total: state.total,
    cart,
    total,
  };
}

// export default CartContainer;
export default connect(mapStateToProps)(CartContainer);
