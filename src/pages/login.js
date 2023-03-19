

import LoginForm from "../components/auth-components/form"
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Redirect } from 'react-router-dom';

function Login() {
     const access_token = localStorage.getItem("access_token")
  return (
     <div>
          {
          access_token ? 
          <Redirect to='/'/>
          :
          <div>
     <Navbar />
     <LoginForm />
     <Footer />
    </div>
     }
     </div>
  );
}

export default Login;
