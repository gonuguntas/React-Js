import React from 'react';
import '../App.css';


class Signup extends React.Component {
   constructor() {
      super();
		
      this.state = {
        email:'',
        psw: '',
        pswrepeat:''
     }
      this.goSignin = this.goSignin.bind(this);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

   }

   goSignin(event){
        event.preventDefault();
        this.props.history.push("/signin", {details: this.state});
   }

   onChange(e){
    this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }

   render() {
      return (
         <div>
             <form  onSubmit={this.onSubmit}>
                <div className="formElements">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email"  onChange={this.onChange} value={this.state.email} required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw"  onChange={this.onChange} value={this.state.psw} required />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="pswrepeat"  onChange={this.onChange} value={this.state.pswrepeat} required />
                    

                    <p>Check in console when click on Sign Up.</p>
                    <button type="submit" class="registerbtn">Sign Up</button>
                 </div>

                    <div class="container signin">
                    <p>Already have an account? <a href="#" onClick = {this.goSignin}>Sign in</a>.</p>
                    </div>
            </form>
         </div>
      );
   }
}

export default Signup;