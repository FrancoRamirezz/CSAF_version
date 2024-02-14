import { useState } from "react";

function contact(){

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const onSumbit= () =>{

}
return(
<div>
<h1>Contact Us </h1>

<p>Glad that you can join us! If you need have any questions, or want to connect. Then you can reach out by email address </p>
<form>

<input value = {name} type = 'text' placeholder = "Name"
onClick={e =>name }/>

<input value = {email} type = "text" placeholder = "Email"/>
<input value = {message} type = 'text' placeholder="Message"/>



</form>



</div>
)
};
export default contact;
export default Contact;
