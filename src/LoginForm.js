import { useState } from "react";
import {Link} from 'react-router-dom';
const LoginForm =() =>{


// e === the trigger of an event when they click the form
const Click_form = (e) =>{
 const[email, setEmail] = useState("");
 const [password, setPassword] = useState("");
// this will be after they click the login form so we use handle submit
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    // we already conformised as a 
};
return(
<>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="MISSA@gmail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/shopping-cart">Back to Shopping Cart</Link>
    </>


);



}
}
export default LoginForm;