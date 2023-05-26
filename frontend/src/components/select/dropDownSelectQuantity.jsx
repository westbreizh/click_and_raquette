import { useState } from "react";
import { useDispatch } from 'react-redux';
import { changeQuantityArticle } from "../../store/cartSlice";

export default function DropDownSelectQuantity(props) {

  const quantityForOneProduct = props.quantityForOneProduct;
  const indexProductInArrayCart = props.indexProductInArrayCart;
  const [newQuantity, setNewQuantity] = useState(quantityForOneProduct);
  
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10); // Convertir en entier
    setNewQuantity(newQuantity);
    dispatch(changeQuantityArticle(
      { quantity: newQuantity, 
        index: indexProductInArrayCart }
    ));
    console.log(event.target.value);
    console.log(indexProductInArrayCart);
  };

  return (

    <div className="dropDownSelectQuantity__wrapper">

      <label className="dropDownSelectQuantity__label">Quantité </label>

      <select 
        className="dropDownSelectQuantity__select"
        value={newQuantity}
        onChange={handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>

      </select>

      <div className="dropDownSelectQuantity__arrow-icon"></div>
      
    </div>
  );
}
