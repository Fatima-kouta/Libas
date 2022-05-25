import React from "react";
import bag1 from '../../assets/images/bag1.png'
import bag2 from '../../assets/images/bag2.png'
import bag3 from '../../assets/images/bag3.png'
import bag4 from '../../assets/images/bag4.png'
import bag5 from '../../assets/images/bag5.png'
import bag6 from '../../assets/images/bag6.png'
import bag0 from '../../assets/images/bag0.png'
import heart  from '../../assets/images/heart.png'
import share  from '../../assets/images/share.png'
import paperplane  from '../../assets/images/paperplane.png'
import bookmark  from '../../assets/images/bookmark.png'
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
        <div className="louis-title ">Louis Vuitton</div>
        <div className="sub-title-louis">Deauville Cloth Handbag</div>
        <div className= "row ">
        <div className="col-lg-6">
            <div className="row h-100">
                <div className="col-xxl-3 col-md-3 col-12">
                    <div className="row h-100">
                    {images.map(img =>
                    <div className="col-xxl-12 col-md-12 col-4 ps-sm-5 ps-4 pb-4 "key={img.id} >
                                <img src={img.image} alt="bag"
                                className="bags  "
                                    key={img.id} />
                        </div>
                    )}
                    </div>
                </div>

                <div className="col-xxl-9  col-md-9 col-12 position-relative" >
                    <img src={bag0} alt="bag"  className="img-fluid show-bag" />    
                    <div className="position-absolute handbag-heart">
                        <img src={heart} alt="heart"/>
                    </div> 
                    <div className="position-absolute handbag-icons">
                
                    <img src={paperplane} alt="paperplane"  className="me-md-5 me-3" />  
                    <img src={share} alt="share"  className="me-md-3 me-2" />  
                    <img src={bookmark} alt="bookmark"  className="ms-3" />  
                  
                    </div>
                </div>
            </div>
       </div>
      
        <div className="col-lg-6 col-sm-12 bag-details">
          <HandBagDetail/>
          </div>

      
         </div>
         </div>

  );
}

export default Handbag;
