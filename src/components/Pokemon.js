import React, { useState } from 'react';
import axios from "axios";

const Pokemon= ()=>{

    const [pokemon, setPokemon]= useState("");

    const getPokemon= async ()=>{

        try {
            let getData= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
            if(!getData){
                getData= await axios.get(`https://pokeapi.co/api/v2/pokemon/${parseInt(pokemon)}`);
            }
            if(getData){
                const data= getData.data;
                document.getElementById("card-header").innerHTML= data.name.toUpperCase();
                document.getElementById("hp").innerHTML= data.stats[0].stat.name + " : " + data.stats[0].base_stat;
                document.getElementById("att").innerHTML= data.stats[1].stat.name + " : " + data.stats[1].base_stat;
                document.getElementById("def").innerHTML= data.stats[2].stat.name + " : " + data.stats[2].base_stat;
                document.getElementById("speed").innerHTML= data.stats[5].stat.name + " : " + data.stats[5].base_stat;
                document.getElementById("spatk").innerHTML= data.stats[3].stat.name + " : " + data.stats[3].base_stat;
                document.getElementById("spdef").innerHTML= data.stats[4].stat.name + " : " + data.stats[4].base_stat;
                document.getElementById("card-footer").innerHTML= "Weight : "+ data.weight;
            }
        } catch (error) {
            document.getElementById("card-header").innerHTML= "Pokemon Not Found";
            document.getElementById("hp").innerHTML= "";
            document.getElementById("att").innerHTML= "";
            document.getElementById("def").innerHTML= "";
            document.getElementById("speed").innerHTML= "";
            document.getElementById("spatk").innerHTML= "";
            document.getElementById("spdef").innerHTML= "";
            document.getElementById("card-footer").innerHTML= "";
        }
    }

    return (
        <div className="container m-5">
            <h1 className="my-3 text-center">Pokemon API</h1>
            <input type="text" className="text-center" name="poke" id="poke" value={pokemon} onChange={(event)=>setPokemon(event.target.value)} autoComplete="off" />
            <button type="submit" onClick={getPokemon} >Get Pokemon Details</button>
            <div className="card text-center my-5">
                <div className="card-header" id="card-header"></div>
                <div className="card-body">
                    <p id="hp"></p>
                    <p id="att"></p>
                    <p id="def"></p>
                    <p id="speed"></p>
                    <p id="spatk"></p>
                    <p id="spdef"></p>
                </div>
                <div className="card-footer" id="card-footer"></div>
            </div>
        </div>
    );
}

export default Pokemon;