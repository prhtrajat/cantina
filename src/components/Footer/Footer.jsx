import React from "react";

const Footer = () =>{

  return (
   

    

      <div className="container p-5" >
      
        <div className="row px-3">

          <div className="col-lg-3 p-0">
            <a href="/" className="nav-link text-start"><i className="bi bi-egg-fill fs-2 text-danger"></i>
              <span className="fw-bold fs-4">Cantina</span></a>
            <a href="/" className="nav-link pt-2 text-start"><i className="bi bi-envelope-fill text-danger"></i><span> cantina23@gmail.com</span></a>  
            <a href="/" className="nav-link py-2 text-start"><i className="bi bi-telephone-fill text-danger"></i><span> +91 7409251422</span></a>  
          </div>

          <div className="col-lg-2 pt-1 text-start">

            <h4 className="mb-0">Links</h4>

            <ul className=" pt-2 list-unstyled">
              <li className="pt-2"> Home</li>
              <li className="pt-2">About Us</li>
              <li className="pt-2">SignUp</li>
              <li className="pt-2">Blog</li>
            </ul>

          </div>

          <div className="col-lg-2 text-start">

            <h4 className="mb-0">Legal</h4>

            <ul className=" pt-2 list-unstyled">
              <li className="pt-2"> Terms Of Use</li>
              <li className="pt-2">Privacy Policy</li>
              <li className="pt-2">Cookie Policy</li>
            </ul>

          </div>

          <div className="col-lg-2 text-start">

            <h4 className="mb-0">Product</h4>

            <ul className=" pt-2 list-unstyled">
              <li className="pt-2"> Take Tour</li>
              <li className="pt-2">Home Delievery</li>
              <li className="pt-2">Reviews</li>
            </ul>

          </div>

          <div className="col-lg text-start">

            <h4 className="mb-0">Newsletter</h4>

            <ul className=" pt-2 list-unstyled">
              <li className="pt-2">Stay Up To Date</li>
              <li className="pt-4 text-center text-secondary">
                <form className="input-group">
                  <input type="email" className="form-control border-0" id="email" placeholder="Your email" />
                  <button className="btn btn-dark text-light rounded-0" type="button">Subscribe</button>
                </form>
              </li>
            </ul>

          </div>


          
        </div>

      </div>

  )

}

export default Footer;