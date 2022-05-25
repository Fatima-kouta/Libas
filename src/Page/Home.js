import Cards from '../Components/Cards/Cards';
import CardTest from '../Components/Cards/CardTest';
import DetailsSeller from '../Components/DetailsSeller/DetailsSeller';
import Footer from '../Components/Footer/Footer';
import Handbag from '../Components/Handbag';
import Section2 from '../Components/Menu/Section2';
import Navbar from '../Components/NavbarComponent';
import Menu from '../Components/Menu';


function Home() {
  return (
 <div className='row mx-0'>
   <div className='col-12 ps-0'>
 
     {/* <Navbar/> */}
   
       
     
        <Menu/>

       
        {/* <Handbag/> */}
        <div className='px-5 pt-5 pb-5'>

        <DetailsSeller/>
        
        </div>
        <div className='px-5 pt-5 pb-5'>

          {/* <Section2/> */}

        </div>
        {/* <Cards/> */}
        {/* <CardTest/> */}
          {/* <Footer/> */}
</div>
        </div>
  );
}

export default Home;
