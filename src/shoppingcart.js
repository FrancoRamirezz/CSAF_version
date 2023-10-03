import { useState } from "react";
import { NavLink, Link} from "react-router-dom";
import './App.css';
import LoginForm from "./LoginForm";
const Loginfrom = LoginForm;
function ShoppingCart(){
const Itemcheck = () =>{
const [checkout, setchecheckout] = useState([]);
const [select_Item, setselect_Item] = useState([]);
// now we set the product pages that will be needed
return(
<div>
<h1>
    Shopping Cart 
</h1>


<nav>
<NavLink to = {LoginForm}></NavLink>
</nav>



</div>

)
};

};
export default ShoppingCart;
