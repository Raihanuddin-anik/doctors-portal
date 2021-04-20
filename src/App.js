import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import MakeAppointment from './Components/MakeAppoinment/MakeAppointment/MakeAppointment';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';


function App() {
  return (
    <Router >
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/appointment">
            <MakeAppointment></MakeAppointment>
         </Route>
         <Route path="/dashboard">
            <DashBoard></DashBoard>
         </Route>
         <Route  path="/*">
          <NoMatch></NoMatch>
         </Route>
       </Switch>
    </Router>
  );
}

export default App;
