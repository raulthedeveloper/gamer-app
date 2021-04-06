import React from 'react'
import Hero from '../layout/Hero/Hero'

export default function Home() {
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
                
            <h1>Hello World</h1>
            </div>
            
        </div>
    )
}
