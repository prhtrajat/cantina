import React from "react";


const Hero = () => {

  return(
    

    <div className="container-fluid m-0 py-5 px-5">
      <div className="row px-0 px-md-5 py-md-5">
        <div className="col-md-7 order-1 order-lg-0">

        
          <div className="card pt-5 mt-4 border-0">
            <div className="card-body p-0 border-0">
              <h1 className="card-title fw-bold lh-1 text-danger" id="hero-title">Easy <span className="text-dark">Peasy</span> Orders <span className="text-dark">at</span> your <span className="text-dark">doorsteps</span></h1>

              <p className="card-text pt-3">Sign Up Now! and just tell us your room No. <span className="fs-3">&#128523;</span> </p>
              <a href="/" className="card-link w-100"><button className="btn btn-danger fw-bold w-50 rounded-0">Order Now <i className="bi bi-arrow-bar-right fw-bold"></i></button></a>
              
            </div>
           
            
          </div>



        </div>
        <div className="col-md-5 order-0 order-lg-1">


          <img src= "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=740&t=st=1717507335~exp=1717507935~hmac=79a7e74bcb28bd1f06cbb059e188914295aefcdd391ad2b35021c044c54eb610" 
          className="w-100 all-images" alt="Burger Img" />


        </div>
      </div>
    </div>


  )

}

export default Hero;