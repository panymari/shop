import Button from '@material-ui/core/Button';
//types
import { CartItemType } from '../App';
//styles
import { Wrapper } from './Item.styles';
import React, { useState } from 'react';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart}) => {
    const [open, setOpen] = useState(false);
    const seeMoreOrLess = () => {
      setOpen(!open);
    };
    return(
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p className={open ? 'discription-close' : 'discription-open'}>{item.description}</p>
            <button type="button" className="see-more" onClick={seeMoreOrLess}>See more</button>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
    );
}

export default Item;