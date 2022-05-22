import React from "react";
import { Link} from "react-router-dom";




function RouteRow() {
  return (
    <div>
    <div className="row-bg ">

<div className="row d-flex text-center link-text">
<div className="col-lg-1"> <Link to="/" className="link">New</Link> </div>
<div className="col-lg-1"><Link to="/"className="link">Brands</Link></div>
<div className="col-lg-1"><Link to="/"className="link">Women</Link></div>
<div className="col-lg-1"><Link to="/" className="link">Men</Link></div>
<div className="col-lg-1"><Link to="/" className="link">Trending</Link></div>

<div className="col-lg-1"><Link to="/" className="link">Bags</Link></div>
<div className="col-lg-1"><Link to="/"className="link">Watches</Link></div>
<div className="col-lg-1 ps-5"><Link to="/"className="link">Shoes</Link></div>
<div className="col-lg-2"><Link to="/"className="link">Top Sellers</Link></div>
<div className="col-lg-2 "><Link to="/"className="link">Become a Seller</Link></div>

</div>

</div>
</div>
  );
}

export default RouteRow;
