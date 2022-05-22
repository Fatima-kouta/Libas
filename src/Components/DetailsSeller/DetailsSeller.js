
import Details from './Details';
import Seller from './Seller';


function DetailsSeller() {
  return (
  <div>
    <div className='row' >
        <div className='col-lg-5'>
            <Details/>
        </div>
        <div className='col-lg-7'>

            <Seller/>
            
        </div>
    </div>
    </div>
  );
}

export default DetailsSeller;
