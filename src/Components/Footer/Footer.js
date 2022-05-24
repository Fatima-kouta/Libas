import {Link} from 'react-router-dom'
import Instagram from '../../assets/images/Instagram.png'
import Facebook from '../../assets/images/Facebook.png'
import TwitterSquared from '../../assets/images/TwitterSquared.png'
import appstore from '../../assets/images/appstore.png'
import googleplay from '../../assets/images/googleplay.png'

function Footer() {
  return (
    <footer className=" footer text-center ">
    <div className=" footer-start px-lg-5 px-2">
        
      <div className="row text-start">
        <div className="col-lg-3 col-md-3 mb-4 mb-md-0 ">
        <div className="footer-title ">Our Services</div>
       
              <Link to="/" className="sub-tittle-footer "> The Concept</Link>
            
              <Link to="/"className="sub-tittle-footer"> Partner Services</Link>
           
        </div>
       
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4 mb-md-0">
        <div className="footer-title">Buy</div>

              <Link to="/" className="sub-tittle-footer"> Tracking</Link>
              <Link  to="/" className="sub-tittle-footer"> Partner Services</Link>
              <Link  to="/" className="sub-tittle-footer"> Authentication</Link>
              <Link  to="/" className="sub-tittle-footer">Shipping Policy </Link>
              <Link  to="/" className="sub-tittle-footer">Return Policy  </Link>
              <Link  to="/" className="sub-tittle-footer">Quality Control </Link>
       
 
        </div>
  
        <div className="col-lg-2 col-md-2 col-sm-12 mb-4 mb-md-0">
        <div className="footer-title">SELL</div>
              <Link to="/"  className="sub-tittle-footer"> How to Sell</Link>
              <Link  to="/"  className="sub-tittle-footer"> Sell an Item </Link>
              <Link  to="/"  className="sub-tittle-footer"> Handling</Link>
              <Link  to="/"  className="sub-tittle-footer">Trusted Sellers </Link>
            
       
        </div>
  
        <div className="col-lg-2 col-md-2 col-sm-12 mb-4 mb-md-0">
        <div className="footer-title">HELP</div>
        <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="sub-tittle-footer">Help Center</a>
            </li>
         
            
          </ul>
       
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 mb-4 mb-md-0">
        <div className="footer-title">LIBAS LLC</div>
     
              <Link to="/"   className="sub-tittle-footer">About US</Link>
         
              <Link to="/"  className="sub-tittle-footer">How it works</Link>
           
              <Link to="/"  className="sub-tittle-footer">Latest Stories</Link>
         
              <Link to="/"   className="sub-tittle-footer">Our Team </Link>
         
              <Link to="/"   className="sub-tittle-footer">Join Us</Link>
           
              <Link to="/"   className="sub-tittle-footer">Contact Us</Link>
        
       
        </div>
      </div>
    </div>
  <hr className='hr-footer'/>
  <div className=" footer-end ps-lg-5 ps-2">
      <div className='row mx-0'>
          <div className='col-12 col-lg-4 col-md-6 px-0 text-start'>
          <select id="disabledSelect" className="form-select select-location"required>
            <option defaultValue>Lebanon - English US - $ - USD</option>
             </select>
          </div>
      </div>
      <div className='row mx-0 px-0 end-section'>
          <div className='col-lg-auto  px-0 text-start'>
          Legal Information
          </div>
          <div className='col-lg-auto px-0'>
          Terms <code className='code'>&</code> Conditions
        </div>
        <div className='col-lg-auto px-0'>
        Privacy Policy <code className='code'>&</code> Cookies
        </div>
        <div className='col-lg-auto px-0'>
        Partners
        </div>
        <div className='col-lg-auto   px-0 d-flex '>
            <div>
            <img src={Instagram} alt="twiter" className='social-media'/>
        <img src={Facebook} alt="twiter" className='social-media'/>
        <img src={TwitterSquared} alt="twiter" className='social-media'/>
      
            </div>

        {/* <div>
            <img src={appstore} alt="app-store" className='app-store'/>

            
            <img src={googleplay} alt="google-play" className='google-play'/>

            </div>
     */}
        </div>
        <div className='col-lg-5 d-flex px-0'>
            <div>
            <img src={appstore} alt="app-store" className='app-store'/>

            
            <img src={googleplay} alt="google-play" className='google-play'/>

            </div>
        </div>
      </div>

  </div>
  </footer>
  );
}

export default Footer;
