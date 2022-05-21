import ellipse1 from '../../assets/images/Ellipse1.png'
import checkIcon  from '../../assets/images/CheckIcon.png'
function Seller() {
  return (
    <div>
      <div className='detailsTitle pb-3'>Seller</div>
      <div className='row d-flex align-items-center'>
        <div >
        <img src={ellipse1} alt="ellipse"/>
        </div>
          <div className="  d-flex">
        <div className='check-txt'>
         <img src={checkIcon} alt="check-icon"/>
          Trusted Seller
        
        <div className="username">@username0000012222</div>
        </div>
       
          </div>
        
      </div>
    </div>
  );
}

export default Seller;
