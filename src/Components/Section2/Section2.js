import React from "react";
import Comment from "./Comment";
import Menu from "./Menu";




function Section2() {
  return (
   
      <div className="row">
        <div className="col-lg-5 col-12 pb-sm-4 pb-4 pb-md-0">  
         <Menu/>
          </div>

          <div className="col-lg-7 col-12 ps-0 ps-lg-5 ">  
       
         <Comment/>
          </div>
         
      </div>

  );
}

export default Section2;
