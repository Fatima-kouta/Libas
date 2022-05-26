import ellipse1 from '../../assets/images/Ellipse1.png'
import checkIcon  from '../../assets/images/CheckIcon.png'
import Vector from '../../assets/images/Vector.png'
import {Link} from 'react-router-dom'
import { FaStar } from 'react-icons/fa';

function Seller() {
  return (
    <div className=' ps-0 ps-lg-5'>
      <div className='detailsTitle pb-3'>Seller</div>
      <div className='row align-items-center'>
        <div className="col-lg-auto col-12 col-md-auto px-0 pb-4 pb-lg-0  ">
        <img src={ellipse1} alt="ellipse"/>
        </div>
          <div className=" col-lg-10 col-12  justify-content-between align-items-center d-flex flex-wrap">
        <div className='check-txt ps-lg-2 pb-3 pb-lg-3 pb-xl-0'>
         <img src={checkIcon} alt="check-icon"/>
          Trusted Seller
        <div className="username">@username0000012222</div>
        </div>
        <div className=' d-flex'>
            <div className='pe-3'><button className='unfollow'>Unfollow</button></div>
            <div ><button className='contact'>Contact</button></div>
            
       </div>
        </div>
     
      
        
      </div>
      <div  className='detailsTitle pb-4 pt-4'>Seller Reviews </div>
      <div className='row w-100 align-items-center pb-5'>
      <div className="col-lg-auto col-12 col-md-2 ">
        <img src={Vector} alt="Vector"/>
        </div>
        <div className='col-lg-4 col-md-3 col-12 username2 pt-3 pt-md-0 ps-lg-3 pb-3 pb-md-0'>@username00123</div>
        <div className='col-lg-5 col-md-4 col-12  star'> 
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        </div>
     
        
      </div>


 
      <div className='row align-items-center pb-3'>
      <div className="col-lg-auto col-12 col-md-2 ">
        <img src={Vector} alt="Vector"/>
        </div>
        <div className='col-lg-4 col-md-3 col-12 username2 pt-3 pt-md-0 ps-lg-3 pb-3 pb-md-0'>@username001234</div>
        <div className='col-lg-5 col-md-4 col-12 star'> 
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        </div>
     
        
      </div>
      <div className='row'>
        <div className='col-12 col-lg-12 text-center'>
        <Link to="/"className='see-more '>See More</Link>

        </div>
      </div>
   
    </div>
    
  );
}

export default Seller;
