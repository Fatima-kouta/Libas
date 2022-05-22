import React from "react";
import { Container } from "react-bootstrap";
import bag1 from '../assets/images/bag1.png'
import bag2 from '../assets/images/bag2.png'
import bag3 from '../assets/images/bag3.png'
import bag4 from '../assets/images/bag4.png'
import bag5 from '../assets/images/bag5.png'
import bag6 from '../assets/images/bag6.png'
import bag0 from '../assets/images/bag0.png'
import badge from '../assets/images/badge.svg'
import btnbag from '../assets/images/btnbag.png'
import Location from '../assets/images/Location.png'

import { Link} from "react-router-dom"
import HandBagDetail from "./HandBagDetail";


function Handbag() {
    const images = [
        {
            "id":1,
            "image":bag6


        },
        {
            "id": 2,
            "image":bag5

        },
        {
            "id": 3,
            "image":bag4

        },
        
        {
            "id": 4,
            "image":bag3

        },
        {
            "id": 5,
            "image":bag2

        },
        {
            "id": 6,
            "image":bag1
        },
        
      
      
    ]
  return (
  
    <div>
        <div className="louis-title">Louis Vuitton</div>
        <div className="sub-title-louis">Deauville Cloth Handbag</div>
        <div className= " row ps-5 ">
        <div className=" col-lg-12 pt-4 d-flex">
        <div className="col-lg-6 px-0 d-flex">
            <div className="col-2  ">

                {images.map(img =>
                    <div key={img.id}>  
                            <img src={img.image} alt="bag"
                            // className="img-fluid "
                             className="bags pb-3"
                              ></img>

                     </div>
                )}
             </div>
            <div className="col-4 px-0" >
            <img src={bag0} alt="bag" 
            //  className="img-fluid "
             className="show-bag"
             
             ></img>      
            </div>
       </div>

          <HandBagDetail/>


      
         </div>
         </div>

    </div>
  );
}

export default Handbag;
