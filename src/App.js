import './App.css'
import MainDash from './Compounents/MainDash/MainDash';
import RightSide from './Compounents/RightSide/RightSide';
import Sidebar from './Compounents/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightSide/>
        </div>
    </div>
  );
}

export default App;
