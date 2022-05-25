import React from "react";
import shield from '../../assets/images/shield.png'
import truck from '../../assets/images/truck.png'
import refresh from '../../assets/images/refresh.png'
import arrow from '../../assets/images/arrow.png'


function Menu() {
  return (
    <>
     <div className="row  pb-3">
     <div className="quality d-flex align-items-center">

      
       <div className=" col-lg-2 col-auto  ps-4">
          <img src={shield} alt="shield" className="shield"/>
          </div>
          <div className=" col-lg-6 col-6 menu-txt ps-4 ps-lg-0">Quality Control</div>
      
       <div className="col-5 col-lg-4 ">
       <div className="text-end pe-5">
         <img src={arrow}alt="arrow" className="arrow"/>
        </div>

       </div>
     </div>
  
   </div>
   <div className="row  pb-3">
     <div className="quality d-flex align-items-center">

      
       <div className=" col-lg-2 col-auto  ps-4">
          <img src={truck} alt="shield" className="shield"/>
          </div>
          <div className=" col-lg-6 col-6 menu-txt ps-4 ps-lg-0">Shipping</div>
      
       <div className="col-5 col-lg-4 ">
       <div className="text-end pe-5">
         <img src={arrow}alt="arrow" className="arrow"/>
        </div>

       </div>
     </div>
  
   </div>

   <div className="row  pb-3">
     <div className="quality d-flex align-items-center">

      
       <div className=" col-lg-2 col-auto  ps-4">
          <img src={refresh} alt="shield" className="shield"/>
          </div>
          <div className=" col-lg-6 col-6 menu-txt ps-4 ps-lg-0">Returns</div>
      
       <div className="col-5 col-lg-4 ">
       <div className="text-end pe-5">
         <img src={arrow}alt="arrow" className="arrow"/>
        </div>

       </div>
     </div>
  
   </div>

   
   </>
  );
}

export default Menu;
