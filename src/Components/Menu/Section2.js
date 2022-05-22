import React from "react";
import { Link} from "react-router-dom";
import Comment from "./Comment";
import Menu from "./Menu";




function Section2() {
  return (
    <div >
      <div className="row">
        <div className="col-lg-5">  
         <Menu/>
          </div>
          <div className="col-lg-7 ">  
          <div className=' ps-0 ps-lg-5'>
         <Comment/>
          </div>
          </div>
      </div>
</div>
  );
}

export default Section2;
