import './App.css';
import Inputs from './components/inputs/Inputs';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { library } from '@fortawesome/fontawesome-svg-core'
 



library.add();

function App() {
  return (
    <div className="App">
      {/* <ChartWrapper/> */}
      <Inputs />
    </div>
  );
}

export default App;
