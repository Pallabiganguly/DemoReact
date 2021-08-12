import React from 'react'
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              Phonenumber
            </div>
            <div class="col">
              Email
            </div>
            <div class="col">
              Adress
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col">
              801
            </div>
            <div class="col">
              @gmail.com
            </div>
            <div class="col">
              kol
            </div>
          </div>

        </div>
      </div>


      <div className="contactform">



        <div class="container">
          <h2 className="form-title">Get In Touch</h2>
          <div class="row align-items-start">
            <div class="col">
              <input type="text" id="conatct_name" placeholder="Your name"></input>
            </div>
            <div class="col">
              <input type="text" id="conatct_email" placeholder="Your email"></input>
            </div>
            <div class="col">
              <input type="text" id="conatct_phonenumber" placeholder="Your phone number"></input>
            </div>
          </div></div>









        <div class="form-group green-border-focus">

          <textarea class="form-control" id="exampleFormControlTextarea5" rows="3" value="Message"></textarea>
        </div>

        <div className="form-group form-button">
          <input type="submit" name="signin" id="signin" className="form=submit" value="Send Message"></input>
        </div>






      </div>




    </>
  )
}

export default Contact;