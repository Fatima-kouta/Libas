import React from "react";

import btnbag from '../../assets/images/btnbag.png'
import Location from '../../assets/images/Location.png'
import badge from '../../assets/images/badge.svg'
import checkIcon from '../../assets/images/CheckIcon.png'

import { Link} from "react-router-dom"


function HandBagDetail() {
  
  return (
     
    
          <div className="row hanbagDetail">
            <div className="col-12">
             <div className="price  ">
               <div className="d-flex align-items-center flex-wrap">
               <div className="price1">$2,100</div>
               <div className="price2">$1,900</div>
               <div className="pourcentage">-70%</div>
               </div>
               
               <div className='check-txt '>
              <img src={checkIcon} alt="check-icon"/>
                Trusted Seller
              </div>
              </div>
               <div className="estimated">Estimated retail price $2,000 </div>
               
             <div className="col-12 ps-0 text-hanbagDetail">
               <div className="row">
                 <div className="col-3 col-sm-auto pe-0">
                   <img src={badge} alt="badge icon "/>
                </div>
                <div className="col-sm-8 col-12 pt-4 pt-sm-0  badge-txt">
                   +15 USD Control and authentication
                   Physical control and authentication 
                   by our experts.
                  
                   <Link to="/" className="learn-more">
                 Learn more
                   </Link> 
                 
                </div>
                 <div className="col-4"></div>
             </div>
            </div>
              <div className="col-12">
                <ul className="msg ps-0">
                  <li>Good Condition </li>
                  <li>Brown Leather </li>
                  <li>Classic LV leather, no scratches </li>
                </ul>
              </div>
              
              <div className="row">
                <div className="col-12">
                <button className="btn-order">Order</button>
                </div>
              </div>
             
          
                  
                    <div className="btn-grp">
                
                  <button className="requestView mb-3 mb-sm-0">Request to View</button>
                 <button className="makeOffer mb-3 mb-sm-0">Make an Offer</button>
                  <button className="btn-store mb-3 mb-sm-3 mb-md-0"><img src={btnbag}alt="store"/></button>

              </div>
                   

                
              <div className="col-12 pt-4 pb-4">
              <div className="row">
                <div className="col-auto">
                  <img src={Location} alt="location" className="location-img" />
                </div>
                <div className="col-10 location-name">
                  Beirut, Lebanon
                </div>
              </div>
            </div>
              

         
           </div>
           </div>
  );
}

export default HandBagDetail;
