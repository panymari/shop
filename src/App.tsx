import { useState } from 'react';
import { useQuery } from 'react-query';
//components
import Item from './Item/Item';
import Cart from './Cart/Cart'
import SearchBar from './SearchBar/SearchBar';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from './App.styles';
import Typography from '@material-ui/core/Typography';
//styles
import { Wrapper, StyledButton } from './App.styles';
//types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [filteredData, setFilteredData] = useState([] as  CartItemType[]);

  const [hide, setHide] = useState(true);
  const seeAll = () => {
    setHide(!hide);
  };

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as  CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
    getProducts
    );

    const getTotalItems = (items: CartItemType[]) => 
      items.reduce((accumulater: number, items) => accumulater+items.amount, 0);

    const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems(previous => {
        //1. Is the item already added in the cart?
        const isItemInCart = previous.find(item => item.id === clickedItem.id)

        if(isItemInCart) {
          return previous.map(item => (
            item.id === clickedItem.id
              ?{...item, amount: item.amount + 1 }
              : item
          ))
        }
        //First time the item is added
        return[...previous, { ...clickedItem, amount: 1}]
      })
    };

    const handleRemoveFromCart = (id: number) => {
      setCartItems(previous =>
        previous.reduce((accumulater, item) => {
          if (item.id === id){
            if (item.amount ===1) return accumulater;
            return [...accumulater, {...item, amount: item.amount -1}];
          }else{
            return [...accumulater, item];
          }
        }, [] as CartItemType[])
      );
    };

    if (isLoading) return <LinearProgress />;
    if(error) return <div>Something went wrong ...</div>
    
  return(
    <Wrapper>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h4" color="inherit" component="div">
          Shop.
        </Typography>
          <SearchBar 
          placeholder="Search..." 
          data={data} 
          filteredData={filteredData} 
          setFilteredData={setFilteredData} 
          seeAll={seeAll}
          />
          <StyledButton onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color='error'>
              <AddShoppingCartIcon />
            </Badge>
          </StyledButton>
        </Toolbar>
      </AppBar>
      <div className="products">
        <Drawer anchor='right' open={cartOpen} onClose={() => {setCartOpen(false)}}>
          <Cart 
            cartItems={cartItems} 
            addToCart={handleAddToCart} 
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <div>
        {filteredData.length !== 0 && (
            <Grid container spacing={3}>
              {filteredData.slice(0, 15).map((item: CartItemType) => (
                <Grid item key={item.id} xs={12} sm={4}>
                  <Item item={item} handleAddToCart={handleAddToCart} />
                </Grid>
              ))}  
             </Grid>
        )}
        </div>
        <div className={hide ? 'show' : 'hide'}>
          <Grid container spacing={3}>
            {data?.map(item => (
              <Grid item key={item.id} xs={12} sm={4}>
                <Item item={item} handleAddToCart={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      </Wrapper>
  );
};

export default App;
