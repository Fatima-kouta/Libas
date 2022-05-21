import React from "react";

import btnbag from '../assets/images/btnbag.png'
import Location from '../assets/images/Location.png'
import badge from '../assets/images/badge.svg'

import { Link} from "react-router-dom"


function HandBagDetail() {
  
  return (
  
    <>
    

         <div  className=" col-lg-6    bag-details " >
             <div className="d-flex price align-items-center ">
               <div className="price1">$2,100</div>
               <div className="price2">$1,900</div>
               <div className="pourcentage">-70%</div>
               </div>
               <div className="estimated">Estimated retail price $2,000 </div>
               <div className="d-flex">
                      <img src={badge} alt="badge icon "/>
                    <div className="badge-txt">
                          +15 USD Control and authentication
                         Physical control and authentication 
                        by our experts.
                        <Link to="/" className="learn-more">
                        Learn more
                        </Link> 
                        
                    </div>
               </div>
               <div className="msg">
               Good Condition Brown Leather Classic LV leather, no scratches
               </div>
               <div>
               <button className="btn-order">Order</button>
               </div>
               
{/* <div className="btn-group align-items-center" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check btn-bag" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
  <label className="btn  btn-label" htmlFor="btnradio1">Request to View</label>

  <input type="radio" className="btn-check btn-bag" name="btnradio" id="btnradio2" autoComplete="off" defaultChecked />
  <label className="btn btn-label" htmlFor="btnradio2">Make an Offer</label>

  <input type="radio" className="btn-check btn-bag"  name="btnradio" id="btnradio3" autoComplete="off"/>
  <label className="btn  btn-label" htmlFor="btnradio3"><img src={btnbag} alt="bag img"/></label>
</div>    */}
 <div className="d-flex">
     <div >
         <img src={Location} alt="location" className="location" />
     </div>
     <div className="location-name">
     Beirut, Lebanon
     </div>
 </div>
 </div>

    </>
  );
}

export default HandBagDetail;
