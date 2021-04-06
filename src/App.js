import './App.scss';
import {useEffect,useState} from 'react'
import Home from './components/pages/Home'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
const [gameData, setGameData ] = useState();
  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://rawg-video-games-database.p.rapidapi.com/games',
        headers: {
          'x-rapidapi-key': '52b459a4e2msh8fddfaf671beb59p14b298jsn42318c134a1e',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data.results);
        setGameData(response.data.results)
      }).catch(function (error) {
          console.error(error);
      });
},[])
  return (
    <div className="App">
      <Home gameData={gameData}/>
    </div>
  );
}

export default App;
