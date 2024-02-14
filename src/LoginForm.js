import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
const LoginForm =() =>{


// e === the trigger of an event when they click the form
const Click_form = (e) =>{
const [username, setUsername] = useState();
const [password, setPassword]= useState();
//This will be after they click the login form so we use handle submit
const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    console.log(email);
    // we already conformised as a 
};
return(
 <Card style={{ maxWidth: 400, margin: '40px auto', padding: '20px' }}>
      <CardContent>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            label="Username"
            fullWidth
            required
            margin="normal"
            value={username}
        
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            //onChange={e =>setPassword(e.) }
          />
          <Button 
            type="submit" 
            color="primary" 
            variant="contained" 
            fullWidth
            style={{ marginTop: 20 }}
          >
            Log In
          </Button>
        </form>
      </CardContent>
    </Card>

);



}
}
export default LoginForm;
