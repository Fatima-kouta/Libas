import React from "react";



function Comment() {
  return (
    
  <div className="container m-0 p-0" >
      <div className="box ">
      <div className="pt-4 px-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label label-comment">Leave a comment for the seller </label>
          <textarea className="form-control comment-text pt-4" id="exampleFormControlTextarea1" rows="3" placeholder="Type here..."></textarea>
      <div className="text-end pt-4 pb-4">
          <button className="btn-comment  " >Comment</button>
      </div>
    </div>
        </div>
    </div>
  );
}

export default Comment;
