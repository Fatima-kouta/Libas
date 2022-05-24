import React from "react";

import btnbag from '../assets/images/btnbag.png'
import Location from '../assets/images/Location.png'
import badge from '../assets/images/badge.svg'
import checkIcon from '../assets/images/CheckIcon.png'

import { Link} from "react-router-dom"


function HandBagDetail() {
  
  return (
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 price1">$2,100</div>
                    <div className="col-4 price2">$1,900</div>
                    <div className="col-4 pourcentage">-70%</div>
                    <div className="col-12 estimated">Estimated retail price $2,000 </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className='check-txt '>
                      <img src={checkIcon} alt="check-icon"/>
                        Trusted Seller
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-hanbagDetail">
              <div className="row">
                <div className="col-1">
                  <img src={badge} alt="badge icon "/>
                </div>
                <div className="col-7">
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
              <ul itemType="none">
                <li>Good Condition </li>
                <li>Brown Leather </li>
                <li>Classic LV leather, no scratches </li>
              </ul>
            </div>

            <div className="col-12">
              <button className="btn-order">Order</button>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <button className="requestView">Request to View</button>
                </div>
                <div className="col-6">
                  <button className="makeOffer">Make an Offer</button>
                </div>
                <div className="col-2">
                  <button className="btn-store"><img src={btnbag}alt="store"/></button>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-1">
                  <img src={Location} alt="location" className="location-img" />
                </div>
                <div className="col-11">
                  Beirut, Lebanon
                </div>
              </div>
            </div>

          </div>

    
          // <div className="hanbagDetail">
          //    <div className="price  ">
          //      <div className="d-flex align-items-center flex-wrap">
          //      <div className="price1">$2,100</div>
          //      <div className="price2">$1,900</div>
          //      <div className="pourcentage">-70%</div>
          //      </div>
               
          //      <div className='check-txt '>
          //     <img src={checkIcon} alt="check-icon"/>
          //       Trusted Seller
          //     </div>
          //     </div>
          //      <div className="estimated">Estimated retail price $2,000 </div>
          //      <div className="text-hanbagDetail">
          //             <img src={badge} alt="badge icon " className="badge-icon"/>
          //           <div className="badge-txt">
          //                 +15 USD Control and authentication
          //                Physical control and authentication 
          //               by our experts.
          //               <Link to="/" className="learn-more">
          //               Learn more
          //               </Link> 
                        
          //           </div>
          //      </div>
          //      <div className="msg">
          //      Good Condition Brown Leather Classic LV leather, no scratches
          //      </div>
          //     <div className="row">
          //       <div className="col-12">
          //       <button className="btn-order">Order</button>
          //       </div>
          //     </div>
             
                /* <div className="row">
                   <div className="col-4">
                   <button className="requestView">Request to View</button>
                   </div>
                   <div className="col-4">
                   <button className="makeOffer">Make an Offer</button>
                   </div>
                   <div className="col-4">
                      <button className="btn-store"><img src={btnbag}alt="store"/></button>
                   </div>
                   </div> */
                   /* <div class="d-flex justify-content-between">
                     <div>
                       <button className="requestView">Request to View</button>
                       </div>
                     <div>
                     <button className="makeOffer">Make an Offer</button>
                     </div>
                     <div>
                     <button className="btn-store"><img src={btnbag}alt="store"/></button>
                     </div>

                   </div> */
          //        <div className="btn-grp">
          //        <button className="requestView">Request to View</button>
          //        <button className="makeOffer">Make an Offer</button>
          //         <button className="btn-store"><img src={btnbag}alt="store"/></button>

          //      </div>

                
            
              

          // <div className="location pb-lg-0 pb-5">
          //     <div >
          //         <img src={Location} alt="location" className="location-img" />
          //     </div>
          //     <div className="location-name">
          //     Beirut, Lebanon
          //     </div>
          // </div>

          // </div>
  );
}

export default HandBagDetail;
