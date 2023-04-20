import React, { useState, useEffect } from 'react';

export function Pokeapi (props) {

  const [pokemonData, setPokemonData] = useState([]);
  const [valorinput, setvalorinput] = useState("");
  const [mensaje, setmensaje] = useState("");

  const manejarcambioinput = (event) => {
    setvalorinput (event.target.value)
  };

const log = () => {
    console.log(pokemonData.name);
};

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      setPokemonData(data.results);
    };

    fetchPokemonData();
  }, []);

//     const manejarclickboton = (event) => {
//      {valorinput === pokemonData.name? setmensaje("es correcto"): (valorinput === "" ? setmensaje("Ingresa un valor") : (valorinput >0 && valorinput != data.name ? setmensaje("Es incorrecto"): ("")) )}
//         console.log(pokemonData[1].name);
//     event.preventDefault
//   };

  return (
    <>
      <h1 className='text-center'>Lista de elementos de prueba</h1>
    
        
            
            <div className='bg-primary container mt-2'>
                <img className='bg-black pt-2 my-2' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${1}.png`} alt={""}/>
                <p>Este es un {pokemonData[0].name} </p>
                <button onClick={log}>Hundir</button>

            </div>
            

    </>
  );
}
