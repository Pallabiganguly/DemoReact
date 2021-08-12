import React, { useState } from 'react'
import img from '../images/140-1403919_pop-art-girl-on-laptop-png-download-pop.png'
import { NavLink, useHistory } from 'react-router-dom'


const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });
  let name, value
  const hanleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;


    const res = await fetch('/registration', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })

    const data = await res.json();
    if (res.status === 422 || !data) {
      alert("Failed to register")
    }
    else {
      alert("registration successful");
      history.push('/login')
    }
  }



  return (
    <>
      <section className="signup">
        <div className="conatainer mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method='POST' className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <i className="zmdi zmdi-account"></i>
                  <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={hanleInputs} placeholder="Your Name"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <i className="zmdi zmdi-email"></i>
                  <input type="text" name="email" id="email" autoComplete="off" value={user.email} onChange={hanleInputs} placeholder="Your Email"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <i className="zmdi zmdi-phone-in-talk"></i>
                  <input type="text" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={hanleInputs} placeholder="Your phone"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <i className="zmdi zmdi-slideshow"></i>
                  <input type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={hanleInputs} placeholder="Your Work"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <i className="zmdi zmdi-lock"></i>
                  <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={hanleInputs} placeholder="Your Password"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <i className="zmdi zmdi-lock"></i>
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={hanleInputs} placeholder="Confirm Password"></input>
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form=submit" value="Register" onClick={postData}></input>
                </div>

              </form>

            </div>


            <img id="signupLogo" src={img} alt="logo"></img>

            <NavLink to="/login">I am Already registered</NavLink>

          </div>
        </div>

      </section>
    </>
  )
}

export default Signup;