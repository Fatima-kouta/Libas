import Cards from '../Components/Cards/Cards';
import DetailsSeller from '../Components/DetailsSeller/DetailsSeller';
import Footer from '../Components/Footer/Footer';
import Handbag from '../Components/Section1/Handbag';
import Section2 from '../Components/Section2/Section2';
import Menu from '../Components/Menu';
import Footer2 from '../Components/Footer/Footer2';
import NavBar from '../Components/NavBar';


function Home() {
  return (
 <div className='row  '>
   <div className='col-12  '>
     <NavBar/>
     <Menu/>

        <Handbag/>

      <div className='px-5 pt-5 pb-5'>
        <DetailsSeller/>
      </div>

      <div className='px-5 pt-5 pb-5'>
          <Section2/>
      </div>
        <Cards/>
      <Footer/>
      <Footer2/>
  </div>  
    </div>
  );
}

export default Home;
