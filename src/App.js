import logo from './logo.svg';
import './App.css';
import Tictactoegrid from './Tictactoegrid';
import Header from './Header';
import { Restbutton } from './Restbutton';

function App() {
  return (
     <div>
       <Header/>
       <Tictactoegrid/>
       <br/>
       <Restbutton/>
     </div>
  );
}

export default App;
