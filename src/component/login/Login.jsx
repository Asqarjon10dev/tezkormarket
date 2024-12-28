import "./Login.css";


function Login () {
    return (
        <div className="login">
             <div className="container"> 
               <h2>Login</h2> 
                 <input type="text" placeholder="username" />
                 <input type="password" placeholder="password" />
                 <div>
                      <p>Remember me</p>
                     
                         <p>Forgot password?</p>
                 </div>
                 <button>Login</button>
                 <p>Don't have an account? <b>Register</b></p>
             </div>
        </div>
    )
}

export default Login;