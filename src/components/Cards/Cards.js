import React from 'react'
import './cards.scss'

export default function cards({data}) {
    
    return (
        <div className="card">
            <img src={data.background_image} />
            <div className="card-title">
            <div className="meta-data">
                <span>Meta Critic:</span>
                <span>{data.metacritic}</span>
                </div>
                <h3>{data.name}</h3>

                <div className="card-buttons">
                <button>Like</button>
                <button>350</button>
                <button>350</button>
                </div>

                <div className="meta-data">
                <span>Release Date:</span>
                <span>{data.released}</span>
                </div>

                <div className="meta-data">
                <span>Charts</span>
                <span>#1 Top 2006</span>
                </div>
                
                <span></span>
            </div>
        </div>
    )
}
