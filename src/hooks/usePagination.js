import React, { useState, useEffect } from 'react';

function upDateGameData(url){
    
    const options = {
      method: 'GET',
      url: 'https://rawg-video-games-database.p.rapidapi.com/games?page=2',
      headers: {
        'x-rapidapi-key': '52b459a4e2msh8fddfaf671beb59p14b298jsn42318c134a1e',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
      }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
          setGameData(response.data.results)
        }).catch(function (error) {
            console.error(error);
        });
   
    }, [])
    
    
  }