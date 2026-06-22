import { useState,useEffect } from 'react';

export default function Joker() {

    let [joke, setJoke] = useState({});

    const URL = "https://api.chucknorris.io/jokes/random";

    let getNewJoke = async () => {
       let response = await fetch(URL);
       let jsonResponse = await response.json();
       setJoke({ value: jsonResponse.value });
    }
    useEffect ( () => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke({ value: jsonResponse.value });
        }
        getFirstJoke();
    }, []);

    return (
        <div >
            <h3>Joker</h3>
            <h4>{joke.value}</h4>
            
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    )
}