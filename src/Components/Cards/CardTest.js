
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
            className:"rolex",


        },
    ]
  return (
    <div className="row">
               <div className="menu">

<div  className="menuList">
      {CardItem.map(card =>
              
                   <div className="menuItem">
                     <div className="row text-center">
                       <div className="col-12 position-relative">
                         <div className="card-image">
                             <img src={card.ItemImage} 
                             alt="rolex "
                            //  className="img-fluid"
                               className={card.className}
                               />
                               </div>
                               <div className="position-absolute heart">
                                  <img src={card.heart} alt="heart" />
                                  <img src={card.bookmark} alt="bookmark" />
                                  </div>
                     </div>
                     </div>
                     {/* <div className="rolex-div ">
                         <div  className={card.className}>
                         <img src={card.ItemImage} alt="rolex "  className={card.className}/>

                         </div>
                          <div className="pe-2"> 
                     
                          <img src={card.heart} alt="heart" className="heart"/>
                         </div>
                          <div className="pe-3">
                          <img src={card.bookmark} alt="bookmark" className="bookmark"/>

                          </div>

                      
                 </div> */}
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

              )}


</div>
</div>


</div>
  );
}

export default CardTest;
{/* 
// const heart = document.getElementById('heart-icon')
// const heart1 = document.getElementById('heart-icon1')
// const heart2 = document.getElementById('heart-icon2')
// const heart3 = document.getElementById('heart-icon3') */}

{/* <div class="link-item">
<a href="#">Read more</a>
<i id="heart-icon3" class="far fa-heart"></i>
</div> */}

// heart.addEventListener("click", toggleLike)
// heart1.addEventListener("click", toggleLike1)
// heart2.addEventListener("click", toggleLike2)
// heart3.addEventListener("click", toggleLike3)

// function toggleLike() {
//     if (heart.className == "far fa-heart") {
//         heart.className = "fas fa-heart"
//         heart.style.color = "red";
//     } else {
//         heart.className = "far fa-heart"
//         heart.style.color = "#8d7676";
//     }
// }

// function toggleLike1() {
//     if (heart1.className == "far fa-heart") {
//         heart1.className = "fas fa-heart"
//         heart1.style.color = "red";
//     } else {
//         heart1.className = "far fa-heart"
//         heart1.style.color = "#8d7676";
//     }
// }

// function toggleLike2() {
//     if (heart2.className == "far fa-heart") {
//         heart2.className = "fas fa-heart"
//         heart2.style.color = "red";
//     } else {
//         heart2.className = "far fa-heart"
//         heart2.style.color = "#8d7676";
//     }
// }

// function toggleLike3() {
//     if (heart3.className == "far fa-heart") {
//         heart3.className = "fas fa-heart"
//         heart3.style.color = "red";
//     } else {
//         heart3.className = "far fa-heart"
//         heart3.style.color = "#8d7676";
//     }
// }
