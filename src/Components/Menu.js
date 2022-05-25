import React from "react";
import { Link} from "react-router-dom";

import { CgMenu } from 'react-icons/cg';


function Menu() {
  return (

<div className="row">
  <div className="col-12">
  <nav className="navbar navbar-expand-lg row-bg ">
    
    
          
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                   
                   <CgMenu/>
                   Menu
                   </button>
    
          
                <div className="row collapse navbar-collapse " id="navbarCollapse">
                      
                <div className="row-bg ">
    
                    <div className="row d-flex text-center link-text  mx-0 px-0">
                    <div className="col-lg-1   col-12"> <Link to="/" className="link">New</Link> </div>
                    <div className="col-lg-1   col-12" ><Link to="/"className="link">Brands</Link></div>
                    <div className="col-lg-1   col-12"><Link to="/"className="link">Women</Link></div>
                    <div className="col-lg-1    col-12"><Link to="/" className="link">Men</Link></div>
                    <div className="col-lg-1    col-12"><Link to="/" className="link">Trending</Link></div>
    
                    <div className="col-lg-1  ps-md-4  col-12 "><Link to="/" className="link">Bags</Link></div>
                    <div className="col-lg-1     col-12"><Link to="/"className="link">Watches</Link></div>
                    <div className="col-lg-1  col-12 ps-lg-5 ps-md-5"><Link to="/"className="link">Shoes</Link></div>
                    <div className="col-lg-2   col-12 ps-md-5"><Link to="/"className="link">Top Sellers</Link></div>
                    <div className="col-lg-2  col-12"><Link to="/"className="link">Become a Seller</Link></div>
    
                    </div>
    
                    </div>
                    
                  </div>
            
          </nav>
    
  </div>
</div>


  );
}

export default Menu;
