import React, {useState,useEffect} from 'react'
import Hero from '../layout/Hero/Hero'
import Card from '../Cards/Cards'





export default function Home({gameData,changeUrl,next,previous}) {
   const [currentUrl, setUrl] = useState("https://rawg-video-games-database.p.rapidapi.com/games")

   
    return (
        <div>
            <Hero/>
            <div className="container">
                <div className="filters">
                <select>
                    <option>Release Date</option>
                    <option>Popularity</option>
                    <option>Average Rating</option>
                </select>

                <select>
                    <option>PC</option>
                    <option>Playstation</option>
                    <option>Xbox</option>
                </select>
                </div>
                

            <div className="card-container">
            { 

            gameData ?  gameData.map((e,index) =>{
                    return <Card key={e.name} data={e}/>
                }) : "Loading...."
                
            } 
           

           
            </div>

            <div className="pagination">
            <button disabled={previous === null} onClick={()=>changeUrl(previous)}>Before</button>
            <button onClick={()=>changeUrl(next)}>Next</button>
            </div>
            
            </div>
            
        </div>
    )
}
