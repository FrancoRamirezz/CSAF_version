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
