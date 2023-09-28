import './App.css';
import Homepage from './Homepage';
import About from './About';
import Navbar from './Navbar';
import ShoppingCart from "./shoppingcart";
import Contact from "./Contact";
import LoginForm from "./LoginForm";
//import {BsFillFilterCircleFill} from 'react-icons/fa' ;
import { Routes, Route, Link, BrowserRouter, NavLink, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
;
const logo_cf = "Welcome to Our E-commerce Store ";
const image = 'https://www.calpolymissa.org/img/Missa+Logo.png';


// call the other compoments using from then the name of the compoments
function App() {
  return (
    // make a router compoment to connect the home to the navbar and then the shopping cart
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>{logo_cf}</h1>
        <img src={image} className="App-logo" alt="logo" />
        <nav className="App-link">
          <Link to="/Homepage">Click This Link</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>2023 E-commerce Store</footer>
      </header>
    </div>
  </BrowserRouter>
  )
}

export default App;
