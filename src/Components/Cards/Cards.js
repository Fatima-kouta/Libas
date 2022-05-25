
import {Card,Button} from "react-bootstrap"
import Rolex from '../../assets/images/Rolex.png'
import Hermes from '../../assets/images/Hermes.png'
import Gucci from '../../assets/images/Gucci.png'
import audemars from '../../assets/images/audemars.png'
import heart from '../../assets/images/heart.png'
import bookmark from '../../assets/images/bookmark.png'
import pin from '../../assets/images/pin.png'

function Cards() {
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
<>
      <div className="card-title ">You May Also Like</div>
        <div className="row backgroud-card">
            <div className="col-12">
        <div className="container-fluid card-container px-5" > 
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-4"> 
       
           {CardItem.map(card =>
            <div className="col a" key={card.id}> 
                              <div className="card h-100 shadow-sm "> 

                     <div className="row text-center">
                       <div className="col-12 position-relative">
                         <div className="card-image">
                             <img src={card.ItemImage} 
                             alt="rolex "
                               className={card.className}
                               />
                               </div>
                               <div className="position-absolute heart">
                                  <img src={card.heart} alt="heart" className="pe-2" />
                                  <img src={card.bookmark} alt="bookmark" />
                                  </div>
                     </div>
                     </div>
                   <div className="card-body">
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
                        </div>
             
              )} 

            </div>
           </div>
           
         
           </div>
        </div> 
  
        </>
  );
}

export default Cards;