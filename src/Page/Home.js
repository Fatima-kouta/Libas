import Cards from '../Components/Cards/Cards';
import DetailsSeller from '../Components/DetailsSeller/DetailsSeller';
import Handbag from '../Components/Handbag';
import Section2 from '../Components/Menu/Section2';
import Navbar from '../Components/NavbarComponent';
import RouteRow from '../Components/RouteRow';


function Home() {
  return (
    <div >
        {/* <Navbar/> */}
        {/* <div>
        <RouteRow/>

        </div> */}
        {/* <Handbag/> */}
        <div className='px-5 pt-5 pb-5'>

        <DetailsSeller/>
        
        </div>
        <div className='px-5 pt-5 pb-5'>

          <Section2/>

        </div>
        <Cards/>

      
    </div>
  );
}

export default Home;
