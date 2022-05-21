import './App.css';
import Home from './Page/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Home />}>
        
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
