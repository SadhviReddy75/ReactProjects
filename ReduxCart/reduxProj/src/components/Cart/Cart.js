import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const selectedItems = useSelector(state=>state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {selectedItems.map(itemss => (
              <CartItem  key = {itemss.id} item={{ id : itemss.id ,title:itemss.title,price:itemss.price,quantity:itemss.quantity,totalPrice:itemss.totalPrice}}/>
    
        ))}
        
      </ul>
    </Card>
  );
};

export default Cart;
