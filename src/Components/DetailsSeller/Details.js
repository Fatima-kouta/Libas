import React from "react";

function Details() {
   const details=[
       {
         id:"1",
         text:"Brand",
         type:"Chanel"
       },
       {
        id:"2",
        text:"Model",
        type:"Classic"
      },
      {
        id:"3",
        text:"Condition",
        type:"Good"
    },
    {
        id:"4",
        text:"Color",
        type:"Black"
    },
    {
        id:"5",
        text:"Size",
        type:"Small"
    },
    {
        id:"6",
        text:"Dimensions",
        type:"28 * 18 * 5 cm"
    },
   ]
  return (
  
    <>
        <div className="detailsTitle pb-4">Details </div>
      
        {details.map(detail =>
                    <div key={detail.id} className="justify-content-between d-flex ">  
                      
                      <div className="detailText pb-4">{detail.text}</div>
                      <div className="detailType pb-4">{detail.type}</div>
                     </div>
                )}
        

    </>
  );
}

export default Details;
