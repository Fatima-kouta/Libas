import pngfooter2 from '../../assets/images/pngfooter2.png'
import date from '../../assets/images/date.png'

function Footer2() {
  return (
      <div className="row px-lg-5 px-2">
          <div className="col-12">

        <div className='row  footer-txt pt-5'>
            <div className='col-lg-8  col-12 '>
                    Except for Brand Partner Items Libas LLC has no association and/or affiliation with the brands whoese items are 
                    offered for sale on its website/App.
                    
            </div>  
            <div className="col-12">
            Except for Brand Approved items the authentication is performed independently by Libas LLC. 
            </div>
        </div>
        <div className='row pt-4 pb-4'>
            <div className='col-12'>
              <img src={pngfooter2} alt="footer-image"/>
            </div>
        </div>
        <div className='d-flex justify-content-between pb-5 flex-wrap'>
            <div className='date'> Lebanon-UAE-USA-Canada</div>
            <div className='date'>
                2022 - Libas LLC 
                <img src={date} alt="footer-image" className='ps-2'/>

            </div>
        </div>
          </div>
      </div>

  );
}

export default Footer2;
