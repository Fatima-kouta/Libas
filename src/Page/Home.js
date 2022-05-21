import DetailsSeller from '../Components/DetailsSeller/DetailsSeller';
import Handbag from '../Components/Handbag';
import Navbar from '../Components/NavbarComponent';
import RouteRow from '../Components/RouteRow';


function Home() {
  return (
    <div >
        <Navbar/>
        <RouteRow/>
        <Handbag/>
        <DetailsSeller/>
    </div>
  );
}

export default Home;
