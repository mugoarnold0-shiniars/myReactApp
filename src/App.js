
import './App.css';
import { BrowserRouter as Router, Routes ,Route,Link } from 'react-router-dom';
import Eightcomponent from './components/Eightcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Secondcomponent from './components/Secondcomponent';
import Seventhcomponent from './components/Seventhcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Ninthcomponent from './components/Ninthcomponent';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>My  first react app</h1>
      </header>

      <Link to ={"/second"} className="links">Second</Link>
      <Link to ={"/third"} className="links">Third</Link>
      <Link to ={"/fourth"} className="links">Fourth</Link>
      <Link to ={"/fifth"} className="links">Fifth</Link>
      <Link to ={"/sixth"} className="links">Sixth</Link>
      <Link to ={"/seventh"} className="links">Seventh</Link>
      <Link to ={"/eight"} className="links">Eight</Link>
      <Link to ={"/ninth"} className="links">Nineth</Link>
      <Routes>
      <Route  path = "/" element={ <Firstcomponent/>} />
      <Route  path = "/second" element={ <Secondcomponent/>} />
      <Route  path = "/third" element={ <Thirdcomponent/>} />
      <Route  path = "/fourth" element={ <Fourthcomponent/>} />
      <Route  path = "/fifth" element={ <Fifthcomponent/>} />
      <Route  path = "/sixth" element={ <Sixthcomponent/>} />
      <Route  path = "/seventh" element={ <Seventhcomponent/>} />
      <Route  path = "/eight" element={ <Eightcomponent/>} />
      <Route  path = "/ninth" element={ <Ninthcomponent/>} />
      <Route  path = "*" element={ <Notfound/>} />
      </Routes>

     
    </div>
    </Router>
  );
}

export default App;
