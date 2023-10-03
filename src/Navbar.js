import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
function Navabr(){
const Nav_logo = "https://www.calpolymissa.org/img/Missa+Logo.png";
const Shop_Image = "https://emojipedia.org/shopping-cart";
//const Shop_Image = "https://www.flaticon.com/free-icon/shopping-cart_263142"
return < nav className="nav">
<h1>Ecomerce</h1>
<div>
<img src = {Nav_logo}/>
<a href = '/' className="site-title" >
    Landing Page
</a>

<ul>
    <li className="Active">
        <Link to= "/shoppingcart" >ShoppingCart </Link></li>
        
    <li>
    <Link to= "/contact"> Contact</Link>    
    </li>
    <li> 
    <Link to= "/About"> About</Link>
    </li>
    <nav>
       <Link to ="/Homepage" >Link</Link> 
    </nav>
</ul>


</div>
</nav>



}
export default Navabr;



}
export default Navabr;
