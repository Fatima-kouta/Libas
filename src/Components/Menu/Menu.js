import React from "react";
import shield from '../../assets/images/shield.png'
import truck from '../../assets/images/truck.png'
import refresh from '../../assets/images/refresh.png'
import arrow from '../../assets/images/arrow.png'


function Menu() {
  return (
    <div>
     <div className="row d-flex pb-3">
     <div className="quality d-flex align-items-center">

       <div className="col-6 d-flex">
       <div className="ps-4"> <img src={shield} alt="shield" className="shield"/></div>
          <div className="menu-txt ps-4 ">Quality Control</div>
       </div>
       <div className="col-6">
       <div className="text-end pe-5"><img src={arrow}alt="arrow" className="arrow"/></div>

       </div>
     </div>
  
   </div>
   <div className="row d-flex pb-3">
     <div className="quality d-flex align-items-center">

       <div className="col-6 d-flex">
       <div className="ps-4"> <img src={truck} alt="shield" className="shield"/></div>
          <div className="menu-txt ps-4 ">Shipping</div>
       </div>
       <div className="col-6">
       <div className="text-end pe-5"><img src={arrow}alt="arrow" className="arrow"/></div>

       </div>
     </div>
  
   </div>
   <div className="row d-flex">
     <div className="quality d-flex align-items-center">

       <div className="col-6 d-flex">
       <div className="ps-4"> <img src={refresh} alt="shield" className="shield"/></div>
          <div className="menu-txt ps-4 ">Returns</div>
       </div>
       <div className="col-6">
       <div className="text-end pe-5"><img src={arrow}alt="arrow" className="arrow"/></div>

       </div>
     </div>
  
   </div>
</div>
  );
}

export default Menu;
