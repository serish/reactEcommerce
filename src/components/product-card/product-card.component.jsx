import { useContext } from "react";

import { CartContext } from "../../context/cart.context";


import "./product-card.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const ProductCard = ({product}) => {
    const {name, price, imageUrl } = product;
    //console.log(product);
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return(<div className="product-card-container">
    <img src={imageUrl} alt={`${name}`} />
    <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <CustomButton buttonType="inverted" onClick={addProductToCart} >Add to cart</CustomButton>
</div>)
}

export default ProductCard;