
import React from "react";
import search from '../assets/images/search.svg'
import LibasLogo from '../assets/images/LibasLogo.svg'
import Search from '../assets/images/Search.png'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';


import ShoppingBag from '../assets/images/ShoppingBag.png'

function NavBar() {
  return (
 <div className='row  mx-0 sticky-top   '>
   <div className='col-12 px-0 '>

   <nav className="navbar navbar-light navbar-expand-lg navbarheader  "  id="mainNav" >

        <div className="navbar-nav ps-4   search-w">
            <div className="input-group  mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={Search} alt="Search" />
                    </span>
              <input type="text" 
              className="form-control search-nav" 
                placeholder="Search by brand, category, item..."/>

            </div>
          </div>
                    <div className="navbar-nav mx-auto ps-0 ps-lg-0 pt-3 pt-sm-0">
                       <img src={LibasLogo}/>
                    </div>

          <div>
          <a data-toggle="modal" id="bars" href="#modal">
                    <button data-target="#navbarResponsive"
                     className="navbar-toggler float-right"
                      aria-controls="navbarResponsive" 
                      aria-expanded="false" 
                      aria-label="Toggle navigation">
                    <AiOutlineMenuUnfold/>
                            </button>
                 </a>
          </div>
               

                <div className="collapse navbar-collapse navHeader" id="navbarResponsive">
                    <div className="navbar-nav ml-auto" id="ulNav">
                    <div className="navbar-nav align-items-center ps-5 pt-5 pt-sm-0 pe-3">
                  <button className="sell-item">Sell an Item</button>
                  <a href="/" className="sign-in">Sign In</a>
                  <a href="/" className="sign-in">Sign Up</a>
                  <button className="shoppoing-bag">
                  <img src={ShoppingBag} alt="ShoppingBag" />
                  </button>
             
                  </div>
                    </div>
                </div>
       
        </nav>
    


        <div className="modal text-center " role="dialog"  id="modal" >
            <div className="modal-dialog modal-md modal-nav position-relative " role="document" >
                <div className="modal-content h-100">
                  <div className="modal-header justify-content-between">
                  <div className="img-fluid w-25">
                      <img src={LibasLogo} className="img-fluid" />
                      </div>
                    <button type="button" className="close close-btn" data-dismiss="modal" aria-label="Close">
                    <AiOutlineClose/>
                    </button>
                </div>
                <div className="modal-body position-relative" >
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                            <div className="navbar-nav ml-auto" id="ulNav">
                    <div className="navbar-nav align-items-center pt-5 pt-sm-0 ">
                     
                  <button className="sell-item">Sell an Item</button>
                  <a href="/" className="sign-in">Sign In</a>
                  <a href="/" className="sign-in">Sign Up</a>
                <img src={ShoppingBag} alt="ShoppingBag" className="shoppoing-bag"/>
                  </div>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>  
  </div>  
  );
}

export default NavBar;
