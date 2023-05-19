import { useContext, useState, Fragment } from "react";
import styles from "../../styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [httpError, setHttpError] = useState();

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setCheckout(true);
  };
  const goBackHandler = () => {
    setCheckout(false);
  };

  const submitOrderHandler = async (userData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://food-order-5faa4-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            oreder: cartCtx.items,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      setSubmitted(true);
    } catch (error) {
      setHttpError(error);
    }
    setIsSubmitting(false);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItem && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartContent = (
    <Fragment>
      {!checkout && (
        <>
          {cartItems}
          <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
        </>
      )}
      {checkout && (
        <Checkout onConfirm={submitOrderHandler} onBack={goBackHandler} />
      )}
      {!checkout && modalActions}
    </Fragment>
  );

  const isSubmittingContent = <p>Sending order data...</p>;

  const submittedContent = (
    <Fragment>
      <p className={styles.success}>Successfully sent the order!</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    </Fragment>
  );
  const errorContent = (
    <p className={styles.error}>Something went wrong, please try again!</p>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!isSubmitting && !submitted && !httpError && cartContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && submitted && submittedContent}
      {httpError && errorContent}
    </Modal>
  );
};

export default Cart;
