

export default function ProductQuantitySelect(props) {

    const productQuantity = props.productQuantity
    const setProductQuantity = props.setProductQuantity
    const minValue = 1;

    const handleDecrement = () => {
        if (productQuantity > 1) {
          setProductQuantity(prevValue => prevValue - 1);
        }
      };

  const handleIncrement = () => {
    setProductQuantity(prevValue => prevValue + 1);
  };

  return (
    <div className="product-quantity__wrapper">
      <button className="product-quantity__decrement" onClick={handleDecrement} disabled={productQuantity === minValue}>-</button>
      <span className="product-quantity__value">{productQuantity}</span>
      <button className="product-quantity__increment" onClick={handleIncrement}>+</button>
    </div>
  );

}


