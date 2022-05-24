import React from "react";
import { Navbar, NavDropdown,   Nav,FormControl,Button,Container,Form } from 'react-bootstrap'
import search from '../assets/images/search.svg'
import LibasLogo from '../assets/images/LibasLogo.svg'
import Search from '../assets/images/Search.png'
import {Link} from 'react-router-dom'
import ShoppingBag from '../assets/images/ShoppingBag.png'
function NavbarComponent() {
  return (
    <div className="mx-0 px-0">
<nav class="navbar navbar-expand-lg  ">
     <div class="navbar-nav  ">
          <div className="input-group search-w mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={Search} alt="Search" />
                    </span>
              <input type="text" 
              className="form-control search-nav" 
                placeholder="Search by brand, category, item..."/>

      
          </div>
          </div>
          <div class="navbar-nav mx-auto">
            
              
              <img src={LibasLogo}/>
              </div>
            
              <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                  
                  
                  <div class="navbar-nav align-items-center">
                  <button className="sell-item">Sell an Item</button>
                  <Link to="/" className="sign-in">Sign In</Link>
                  <Link to="/" className="sign-in">Sign Up</Link>
                <img src={ShoppingBag} alt="ShoppingBag" className="shoppoing-bag"/>
                  </div>
              </div>
              

      </nav>
      </div>

  );
}

export default NavbarComponent;
