import React from "react";

const FoodCards = () => {

  return (
    <section>
    <div className="container py-3">
      <div className="row justify-content-between">
        <div className="col-6">
          <h5 className="fs-4 fw-bold text-start text-danger">Quick picks</h5>
        </div>

        <div className="col-6 d-flex flex-row-reverse">
          <a href="/" className="text-decoration-none fw-bold">View all</a>
        </div>
      </div>

       <div className="row pt-2">
        <div className="col-md-4 pt-2 pt-md-0">
          <div className="card shadow pb-2">
            <img src="https://t4.ftcdn.net/jpg/02/42/99/87/360_F_242998711_Eet2g9MuURhsQ2JNxjOVfJgVJMEJNuDS.jpg" alt="" className="card-img-top w-100" />
            <div className="card-title px-2 pt-2 pb-0"><h5 className="fs-6 fw-bold">Poha</h5>
            <p className="small text-secondary mb-0">A light Indian dish made from flattened rice, cooked with spices, onions, and peas.</p>
             <div className="container-fluid pt-1 px-0">
              <div className="row">
                <div className="col-6"> <span><i className="bi bi-star-fill text-warning"></i> 4.5</span></div>
  
                <div className="col-6 d-flex flex-row-reverse"><button className="btn btn-sm px-3"
                  >&#x20B9; 30</button></div>
               </div>
             </div>
             </div>
          </div>
        </div>

        <div className="col-md-4 pt-2 pt-md-0">
          <div className="card shadow pb-2">
            <img src="https://t3.ftcdn.net/jpg/06/16/85/60/360_F_616856040_zCvPMQkPFOWsVb3Hxo7mQUYzlzciFCZs.jpg" alt="" className="card-img-top w-100" />
            <div className="card-title px-2 pt-2 pb-0"><h5 className="fs-6 fw-bold">Momos</h5>
            <p className="small text-secondary mb-0">Tibetan dumplings filled with meat or vegetables, often steamed or fried.</p>
             <div className="container-fluid pt-1 px-0">
              <div className="row">
                <div className="col-6"> <span><i className="bi bi-star-fill text-warning"></i> 4.5</span></div>
  
                <div className="col-6 d-flex flex-row-reverse"><button className="btn btn-sm px-3"
                  >&#x20B9; 60</button></div>
               </div>
             </div>
             </div>
          </div>
        </div>

        <div className="col-md-4 pt-2 pt-md-0">
          <div className="card shadow pb-2">
            <img src="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=612x612&w=0&k=20&c=5ro7Cvwx79tWpyN1r2hy3DwplFi5FuPrD_4DYD8tZpg=" alt="" className="card-img-top w-100" />
            <div className="card-title px-2 pt-2 pb-0"><h5 className="fs-6 fw-bold">Pasta</h5>
            <p className="small text-secondary mb-0">An Italian dish of wheat dough shaped into various forms and cooked with sauces.</p>
             <div className="container-fluid pt-1 px-0">
              <div className="row">
                <div className="col-6"> <span><i className="bi bi-star-fill text-warning"></i> 4.5</span></div>
  
                <div className="col-6 d-flex flex-row-reverse"><button className="btn btn-sm px-3"
                  >&#x20B9; 80</button></div>
               </div>
             </div>
             </div>
          </div>
        </div>

       </div>

       <div className="row d-none d-md-flex pt-3">

        <div className="col-md-4 pt-2 pt-md-0">
          <div className="card shadow pb-2">
            <img src="https://t4.ftcdn.net/jpg/03/21/32/45/360_F_321324549_3utrdpZOFdsyUElymaPhm5LXRyTpnteh.jpg" alt="" className="card-img-top w-100" />
            <div className="card-title px-2 pt-2 pb-0"><h5 className="fs-6 fw-bold">Burger</h5>
            <p className="small text-secondary mb-0">A sandwich with a cooked patty in a bun, often with lettuce, tomato, and condiments.</p>
             <div className="container-fluid pt-1 px-0">
              <div className="row">
                <div className="col-6"> <span><i className="bi bi-star-fill text-warning"></i> 4.5</span></div>
  
                <div className="col-6 d-flex flex-row-reverse"><button className="btn btn-sm px-3"
                  >&#x20B9; 30</button></div>
               </div>
             </div>
             </div>
          </div>
        </div>

        <div className="col-md-4 pt-2 pt-md-0">
          <div className="card shadow pb-2">
            <img src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" alt="" className="card-img-top w-100" />
            <div className="card-title px-2 pt-2 pb-0"><h5 className="fs-6 fw-bold">Pizza</h5>
            <p className="small text-secondary mb-0">An Italian dish with a dough base topped with tomato sauce, cheese, and various toppings.</p>
             <div className="container-fluid pt-1 px-0">
              <div className="row">
                <div className="col-6"> <span><i className="bi bi-star-fill text-warning"></i> 4.5</span></div>
  
                <div className="col-6 d-flex flex-row-reverse"><button className="btn btn-sm px-3"
                  >&#x20B9; 120</button></div>
               </div>
             </div>
             </div>
          </div>
        </div>

        <div className="col-md-4 pt-2 pt-md-0">
          <div className="card shadow pb-2">
            <img src="https://thumbs.dreamstime.com/b/sandwich-27721955.jpg" alt="" className="card-img-top w-100" />
            <div className="card-title px-2 pt-2 pb-0"><h5 className="fs-6 fw-bold">Sandwich</h5>
            <p className="small text-secondary mb-0">A meal of two bread slices with various fillings like meat, cheese, and vegetables.</p>
             <div className="container-fluid pt-1 px-0">
              <div className="row">
                <div className="col-6"> <span><i className="bi bi-star-fill text-warning"></i> 4.5</span></div>
  
                <div className="col-6 d-flex flex-row-reverse"><button className="btn btn-sm px-3"
                  >&#x20B9; 25</button></div>
               </div>
             </div>
             </div>
          </div>
        </div>
       </div>
    </div>
  </section>
  )

}


export default FoodCards;