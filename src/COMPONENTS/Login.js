import React, { useState } from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import loginpic from '../images/140-1403919_pop-art-girl-on-laptop-png-download-pop.png'
const Login = () => {
  const history = useHistory();
  const [users, setUsers] = useState({
    email: "",
    password: ""
  });
  let name, value
  const hanleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUsers({...users,[name]:value})
  }

  const handleButton =async (e) => {
     
     e.preventDefault();
     const{email,password} = users;
     const res = await fetch('/signin',{
       method:"POST",
       headers:{
        "Content-Type": "application/json"
       },
       body:JSON.stringify({
        email,password
       })
     }) 

     const d = await res.json();
     if(res.status===400||!d){
       window.alert("Invalid cedentials")
     }
     else{
       window.alert("Login successful");
       history.push('/')
     }
  }



  return (
    <>
      <section className="signup">
        <div className="conatainer mt-5">
          <div className="signup-content">
            <div className="signup-form">

              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <div>
                    <img id="loginlogo" src={loginpic} alt="logo"></img>

                  </div>
                  <NavLink to='/signup'>Create an account</NavLink>
                  <div className="logo">
                    <h2 className="form-title">Sign In</h2>
                    <div className="form-group">
                      <label htmlFor="name"></label>
                      <i className="zmdi zmdi-email"></i>
                      <input type="text" name="email" id="email" placeholder="Your Email" value={users.email} onChange={hanleInputs}></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name"></label>
                      <i className="zmdi zmdi-lock"></i>
                      <input type="password" name="password" id="password" placeholder="Your Password" value={users.password} onChange={hanleInputs}></input>
                    </div>
                    <div className="form-group form-button">
                      <input type="submit" name="signin" id="signin" className="form=submit" value="Log in" onClick={handleButton}></input>
                    </div>
                  </div>
                </div>
              </form>

            </div>



          </div>
        </div>

      </section>
    </>
  )
}

export default Login;