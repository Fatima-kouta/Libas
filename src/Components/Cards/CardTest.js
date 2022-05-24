
import {Card,Button} from "react-bootstrap"
import Rolex from '../../assets/images/Rolex.png'
import Hermes from '../../assets/images/Hermes.png'
import Gucci from '../../assets/images/Gucci.png'
import audemars from '../../assets/images/audemars.png'
import heart from '../../assets/images/heart.png'
import bookmark from '../../assets/images/bookmark.png'
import pin from '../../assets/images/pin.png'

function CardTest() {
    const CardItem=[
        {
            id:"1",
            ItemImage:Rolex,
            heart:heart,
            bookmark:bookmark,
            title2:"Rolex",
            titl3:"Oyster-perpetual",
            titl4:"11,700 USD",
            pin:pin,
            title5:"  Beirut",
            className:"rolex",

        },
        {
            id:"2",
            ItemImage:Hermes,
            heart:heart,
            bookmark:bookmark,
            title2:"Hermes",
            titl3:"Yellow Leather Belt",
            titl4:"2,100 USD ",
            pin:pin,
            title5:"  Beirut",
            className:"rolex",


        },
        {
            id:"3",
            ItemImage:Rolex,
            heart:heart,
            bookmark:bookmark,
            title2:"Audemars Piguet ",
            titl3:"ROYAL OAK YELLOW",
            titl4:"180,000 USD ",
            pin:pin,
            title5:"Dubai" ,
            className:"rolex",

        },
        {
            id:"4",
            ItemImage:Gucci,
            heart:heart,
            bookmark:bookmark,
            title2:"Gucci",
            titl3:"Beige Canvas Wallet",
            titl4:"11,700 USD",
            pin:pin,
            title5:"  370 USD",
            className:"gucci",


        },
    ]
  return (
  < >
      <div className="card-title ">You May Also Like</div>
            <div className="box-card   d-flex">
            <div className="row1 mx-0 ">
                    {CardItem.map(card =>
             
                   <div class="column">
                     <div class="card">
                     <div className="rolex-div ">
                           <div  className={card.className}>
                           <img src={card.ItemImage} alt="rolex "  className="rolex"/>

                           </div>
                            <div className="pe-2"> 
                            <img src={card.heart} alt="heart" className="heart"/>
                           </div>
                            <div className="pe-3">
                            <img src={card.bookmark} alt="bookmark" className="bookmark"/>

                            </div>

                        
                   </div>
                      <div className="title2-card ">{card.title2}</div>
                      <div className="title3-card">{card.titl3}</div>
                      <div className="title4-card">{card.titl4}</div>
                      <div className="title5-card d-flex ">
                        <div>
                        <img src={card.pin} alt="pin" className="pin"/>

                        </div>
                        {card.title5}
                          </div>
                     </div>
                   </div>
               
                //      <div className="col-lg-3 px-lg-3 px-sm-2 pb-3 px-md-1  " key={card.id}>
                //    <Card className="card-width">
                //    <Card.Body className=" p-0 m-0">
                //        <div className="rolex-div ">
                //            <div  className={card.className}>
                //            <img src={card.ItemImage} alt="rolex "  className="rolex"/>

                //            </div>
                //             <div className="pe-2"> 
                //             <img src={card.heart} alt="heart" className="heart"/>
                //            </div>
                //             <div className="pe-3">
                //             <img src={card.bookmark} alt="bookmark" className="bookmark"/>

                //             </div>

                        
                //    </div>
                //       <div className="title2-card ">{card.title2}</div>
                //       <div className="title3-card">{card.titl3}</div>
                //       <div className="title4-card">{card.titl4}</div>
                //       <div className="title5-card d-flex ">
                //         <div>
                //         <img src={card.pin} alt="pin" className="pin"/>

                //         </div>
                //         {card.title5}
                //           </div>
                //    </Card.Body>
                //    </Card>
                //    </div>
               
                )}
                    </div>
        
        
                  {/* <img src={Gucci}></img> */}
        
            </div>
  </>
  );
}

export default CardTest;
