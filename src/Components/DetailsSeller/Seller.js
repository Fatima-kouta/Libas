import ellipse1 from '../../assets/images/Ellipse1.png'
import checkIcon  from '../../assets/images/CheckIcon.png'
import Vector from '../../assets/images/Vector.png'
import star from '../../assets/images/star.png'

function Seller() {
  return (
    <div className='ps-md-5'>
      <div className='detailsTitle pb-3'>Seller</div>
      <div className='row align-items-center'>
        <div className="col-auto">
        <img src={ellipse1} alt="ellipse"/>
        </div>
          <div className=" col-9 justify-content-between d-flex">
        <div className='check-txt'>
         <img src={checkIcon} alt="check-icon"/>
          Trusted Seller
        
        <div className="username">@username0000012222</div>
        </div>
       <div className='d-flex'>
            <div className='pe-3'><button className='unfollow'>Unfollow</button></div>
            <div ><button className='contact'>Contact</button></div>
            
       </div>
          </div>
        
      </div>
      <div  className='detailsTitle pb-3 pt-4'>Seller Reviews </div>
      <div className='row align-items-center pb-5'>
        <div className="col-md-12 d-flex  align-items-center ">
        <img src={Vector} alt="Vector"/>
        <div className='username2 ps-3'>@username00123</div>
        <div className='star'> 
          <img src={star}alt="star"/>
        </div>

        </div>
        
      </div>
      <div className='row align-items-center pb-3'>
      <div className="col-md-6 d-flex  align-items-center ">
        <img src={Vector} alt="Vector"/>
        <div className='username2 ps-3'>@username001234</div>
        <div className='star'> 
          <img src={star}alt="star"/>
        </div>

        </div>
     
        
      </div>
      <div className='see-more '>See More</div>

    </div>
    
  );
}

export default Seller;
