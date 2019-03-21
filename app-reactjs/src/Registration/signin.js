import React from 'react';
import '../App.css';
import Loadable from 'react-loadable';

function Loading() {
   return <h3>Loading...</h3>;
 }
/* The React Loadable function lets you render a dynamic import as a regular component
 React Loadable available for server-side rendering. 
  */
 const Load = Loadable({
   loader: () => import('../components/Loadable'),
   loading: Loading,
   delay: 2000
 });

class Signin extends React.Component {
   constructor() {
      super();
		
      this.state = {
         email:'',
         psw: ''
      }
      this.goSignup = this.goSignup.bind(this);
         }

   goSignup(event){
    event.preventDefault();
    //this.props.history.push("/signup");
    this.props.history.push({pathname: "/signup"});
    }


   render() {
      return (
         <div>
            <Load></Load> <hr color='green'/>
             <form  className="formElements">
                <div>
                    <h1>Sign In</h1>
                    
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    
                    <button type="submit" class="registerbtn">Sign In</button>
                 </div>

                    <div class="container signin">
                    <p>Create Account? <a href="#" onClick = {this.goSignup}>Sign Up</a>.</p>
                    </div>
            </form>
         </div>
      );
   }
}

export default Signin;