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
const [next, setNext ] = useState();
const [ previous, setPrevious ] = useState()
const [ url, setUrl ] = useState("https://rawg-video-games-database.p.rapidapi.com/games")


  useEffect(() => {
    const options = {
        method: 'GET',
        url: url,
        headers: {
          'x-rapidapi-key': '52b459a4e2msh8fddfaf671beb59p14b298jsn42318c134a1e',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setGameData(response.data.results)
        setNext(response.data.next)
        setPrevious(response.data.previous)
      }).catch(function (error) {
          console.error(error);
      });

      
      
      
},[url])

function changeUrl(url){
  const options = {
    method: 'GET',
    url: url
  };
  
  axios.request(options).then(function (response) {
    setGameData(response.data.results)
    setNext(response.data.next)
    setPrevious(response.data.previous)
  }).then(() => {
    document.body.scrollTop = 300;
    document.documentElement.scrollTop = 300;
  })
  .catch(function (error) {
      console.error(error);
  });

 
}

  return (
    <div className="App">
      <Home gameData={gameData} changeUrl={changeUrl} next={next} previous={previous}/>
    </div>
  );
}

export default App;
