## This is a Frontend React Project for E-Commerce Cart

Coach: PedroTech

Steps:
- Init project ```npx create-react-app ./```
- Install dependencies ```yarn add phosphor-react react-router-dom```
- Phosphor React is icon family for React. You can [view here](https://phosphoricons.com/)
To display the icon, use ```<IconComponent size={thesize}>```
- React Router DOM is used for basic routing. As you click around on the different Link component, the router renders the matching Route component. You can [view more here](https://reactrouter.com/en/main)
How the router looks like:
```
<Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />}/> // include the path and the element inside
            <Route path="/cart" element={<Cart />}/>
          </Routes>
 </Router>
```
useNavigate hook from React Router DOM:
```
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
 <button onClick={() => navigate("/")} // navigate to the designated route
```
Use the { Link } hook from "react-router-dom";
```
import { Link } from 'react-router-dom'

<Link to="/">Shop</Link>
<Link to="/cart">
    <ShoppingCart size={32} /> // this is the phosphor icon
</Link>
```


## Notes:
- The app is inclusive of 3 components: 1 nav bar & 2 pages namely 'Shop' and 'App'
- Init the ShopContext component, which includes all the main logic of the whole web page.
- In the shop page, we init a Shop.jsx component, which is inclusive of the Product.jsx component.
The shop component is inclusive of the product of which property is the data passed in the Product.jsx component
Hence, in the shop component, we shall import { PRODUCTS } which is our object. In this lesson, we init this object by creating a products.js. However, in real life, the product list should be imported from fetch or specifically for Shopify, it would be via storefront API.
```
import { PRODUCTS } from "../../products";
import Product from './Product'; // import the Product component
```
In our Product.jsx component, we will declare our props which is `data` in this case.
We also import the functions which are Add To Cart and the CartItems from our ShopContext.
Then show the value of the item inside the 'Add To Cart' button by setting a cartItemAmount which takes the value of the `cartItems[id]`
```const cartItemAmount = cartItems[id] // show the value of the exact item```
- In the cart page, we init a Cart.jsx component, which is inclusive of the CartItem.jsx component.
Similar to the Product.jsx component, we shall declare our props which is `data`, then import cartItems, addToCart, removeFromCart and updateCartItemAmount all from the ShopContext
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

- To deploy to our server, `npm run build` or `yarn build` > get the build folder to import into public_html