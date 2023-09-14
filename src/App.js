import './App.css';
import Homepage from './Homepage';
import About from './About';
import Navabr from './Navbar';
import Contact from "./Contact";
import ShoppingCart from "./shoppingcart";
import { Routes, Route, Link, BrowserRouter, NavLink, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
const logo_cf = "MISSA Ecomerce Project ";
const image = 'https://www.calpolymissa.org/img/Missa+Logo.png';

//Call the other componets using from then the names of the componets
function App() {
  return (
    //Make a router component to connect the home to the navbar and then the shopping cart
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>{logo_cf}</h1>
        <img src   className="App-logo" alt="logo" />
        <nav className='App-link'>
          <Link to ="/Homepage">Click This Link</Link>
        
        </nav>
        
        <main>
        <Routes>
           <Route path = "/Homepage" element = {<Homepage/>}>
          <Route path = 'Navabr' element = {<Navbar/>}>
          <Route path = "About" element = {<About/>}> 

          </Route>
          </Route>
          </Route>
          </Routes>

        </main>
  
      
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;
