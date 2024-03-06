import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function chageNameState(e) {
    setName(e.target.value);
  }

  function changeNumberState(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handelPaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShipping(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      {/* input text */}
      <input value={name} onChange={chageNameState} />
      <p>Name: {name}</p>

      {/* input number */}
      <input value={quantity} onChange={changeNumberState} type="number" />
      <p>Quantity: {quantity}</p>

      {/* input text area */}
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter additional delivery details"
      />
      <p>Comment: {comment}</p>

      {/* select options */}
      <select value={payment} onChange={handelPaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="RuPay">RuPay</option>
        <option value="Mastercard">Mastercard</option>
      </select>

      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShipping}
        />
        PickUp
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="delivery"
          checked={shipping === "delivery"}
          onChange={handleShipping}
        />
        Delivery
      </label>

      <p>Shipping: {shipping}</p>
    </>
  );
}

export default MyComponent;
