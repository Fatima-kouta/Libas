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

function TEst() {
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
      <>
    <section id="services" className="services section-bg">
   <div className="container-fluid">
     <div className="col-sm-12 text-center mb-4">
       <a className="btn btn-primary" target="_blank" href="http://paypal.me/skd1996">
            Donate Now <i className="fa fa-dollar">
                </i>
                </a>
     </div>
      <div className="row row-sm">
         <div className="col-md-6 _boxzoom">
            <div className="zoom-thumb">
               <ul className="piclist">
                
               {images.map(img =>
                    <div key={img.id}>  
                            <img src={img.image} alt="bag"
                            // className="img-fluid "
                             className="bags pb-3"
                              ></img>

                     </div>
                )}
               </ul>
            </div>
            <div className="_product-images">
               <div className="picZoomer">
               <img src={bag0} alt="bag"  className="show-bag" />

                  {/* <img className="my_img" src="https://s.fotorama.io/1.jpg" alt=""/> */}
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="_product-detail-content">
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
                        {/* <Link to="/" className="learn-more">
                        Learn more
                        </Link>  */}
                        
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
         </div>
      </div>
   </div>
</section>
<section className="sec bg-light">
   <div className="container">
      <div className="row">
         <div className="col-sm-12 title_bx">
            <h3 className="title"> Recent Post   </h3>
         </div>
      </div>
      <div className="row">
         <div className="col-md-12 list-slider mt-4">
            <div className="owl-carousel common_wd  owl-theme" id="recent_post">
               <div className="item">
                  <div className="sq_box shadow">
                     <div className="pdis_img"> 
                        <span className="wishlist">
                        <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                        </span>
                        <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/"/> 
                        </a>
                     </div>
                     <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                     <div className="price-box mb-2">
                        <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                        <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                     </div>
                     <div className="btn-box text-center">
                        <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <div className="sq_box shadow">
                     <div className="pdis_img"> 
                        <span className="wishlist">
                        <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                        </span>
                        <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/"/> 
                        </a>
                     </div>
                     <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                     <div className="price-box mb-2">
                        <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                        <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                     </div>
                     <div className="btn-box text-center">
                        <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <div className="sq_box shadow">
                     <div className="pdis_img"> 
                        <span className="wishlist">
                        <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                        </span>
                        <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/"/> 
                        </a>
                     </div>
                     <h4 className="mb-1"> <a href="#"> Milton Bottle </a> </h4>
                     <div className="price-box mb-2">
                        <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                        <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                     </div>
                     <div className="btn-box text-center">
                        <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <div className="sq_box shadow">
                     <div className="pdis_img"> 
                        <span className="wishlist">
                        <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                        </span>
                        <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/"/> 
                        </a>
                     </div>
                     <h4 className="mb-1"> <a href="#"> Milton Bottle </a> </h4>
                     <div className="price-box mb-2">
                        <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                        <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                     </div>
                     <div className="btn-box text-center">
                        <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <div className="sq_box shadow">
                     <div className="pdis_img"> 
                        <span className="wishlist">
                        <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                        </span>
                        <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/"/> 
                        </a>
                     </div>
                     <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                     <div className="price-box mb-2">
                        <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                        <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                     </div>
                     <div className="btn-box text-center">
                        <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <div className="sq_box shadow">
                     <div className="pdis_img"> 
                        <span className="wishlist">
                        <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                        </span>
                        <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/"/> 
                        </a>
                     </div>
                     <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                     <div className="price-box mb-2">
                        <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                        <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                     </div>
                     <div className="btn-box text-center">
                        <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                     </div>
                  </div>
               </div>
               <div className="item">
                  <div className="sq_box shadow">
                     <div className="pdis_img"> 
                        <span className="wishlist">
                        <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                        </span>
                        <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/"/> 
                        </a>
                     </div>
                     <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                     <div className="price-box mb-2">
                        <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                        <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                     </div>
                     <div className="btn-box text-center">
                        <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</>
  );
}

export default TEst;
