import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';


const ProductsCard = (props) => {

    const { img, rating, title, price } = props;

    const [isAdded, setIsAdded] = useState(false);


    const dispatch = useDispatch();


    const handleAddToCart = () => {

        // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
        const item = { ...props };
        dispatch(addItem(item));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };


    return (
        <>
            <div className="product_card d-flex flex-column justify-content-between py-5 px-5 shadow-md shadow-gray-400">
                <figure>
                    <img src={img} alt="item-img" />
                </figure>
                <strong className="rating">{rating}</strong>
                <h4 className="title">{title}</h4>
                <h3 className="price">₹ {price.toLocaleString()}</h3>

                <div className='flex flex-col'>
                    <button
                        type="button"
                        className={`btnn ${isAdded ? 'added' : ''}`}
                        onClick={handleAddToCart}
                    >
                        {isAdded ? 'Added' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductsCard;