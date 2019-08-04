import React from 'react';


function Hero({heroName}){
    if(heroName === "Joker"){
        throw new Error("Not a hero")
    }
    return(
        <div>
            <h3> {heroName} </h3>
        </div>
    )
}

export default Hero;