import React from "react";

import btnbag from '../assets/images/btnbag.png'
import Location from '../assets/images/Location.png'
import badge from '../assets/images/badge.svg'

import { Link} from "react-router-dom"


function HandBagDetail() {
  
  return (
  

    
<>
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
               

          <div className="d-flex">
              <div >
                  <img src={Location} alt="location" className="location" />
              </div>
              <div className="location-name">
              Beirut, Lebanon
              </div>
          </div>

          </>
  );
}

export default HandBagDetail;
