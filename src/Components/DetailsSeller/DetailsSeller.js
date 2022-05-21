
import Details from './Details';
import Seller from './Seller';


function DetailsSeller() {
  return (
    <div className='row' >
        <div className='col-5'>
            <Details/>
        </div>
        <div className='col-7'>
            <Seller/>
        </div>
    </div>
  );
}

export default DetailsSeller;
