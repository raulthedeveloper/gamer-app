import './App.scss';
import Home from './components/pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
