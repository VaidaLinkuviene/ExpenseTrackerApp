import './App.css';
import ExpensesInputs from './components/inputs/Inputs';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add();

function App() {
  return (
    <div className="App">
      <ExpensesInputs />
    </div>
  );
}

export default App;
