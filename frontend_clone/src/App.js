import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes';
import HomepageNavbar from './Components/HomepageNavbar';
import { useSelector,useDispatch } from 'react-redux';
function App() {
  const data=useSelector((state)=>state.navbarHome);
  const dispatch=useDispatch();


  return (
    <div className="App">
      
     {!data?<HomepageNavbar/>:""}
     <AllRoutes/>
     
    </div>
  );
}

export default App;
