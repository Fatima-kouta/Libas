
import Details from './Details';
import Seller from './Seller';


function DetailsSeller() {
  return (
 
    <div className='row pt-5' >
        <div className='col-lg-5 col-12 px-lg-4  px-md-2 ps-0 '>
            <Details/>
        </div>
        <div className='col-lg-7 px-md-2 ps-0 pt-5 pt-lg-0'>

            <Seller/>
            
        </div>
    </div>
  
  );
}

export default DetailsSeller;
