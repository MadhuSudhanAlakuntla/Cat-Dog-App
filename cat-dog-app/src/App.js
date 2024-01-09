import './App.css';
import React, { useState } from 'react';
import CatComponent from './Components/CatComponent';
import DogComponent from './Components/DogComponent';

const App = () => {
  const [animal, setAnimal] = useState("dog");

  return (

    <div>
      <h2 id='nav'>Cat-Dog-App</h2>
    <div id='d0'>
      
      <div id='d1'>
        
        <form>
          <label>
            <h3>Select an animal:</h3>
            <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </select>
          </label>
        </form>
        <h5>
        Animals are a gift from above for they <br></br>truly define the words unconditional love.
        </h5>
      </div>
      <div id='d2'> 
        {animal === 'cat' ? <CatComponent /> : <DogComponent />}
      </div>
    </div>
    </div>
  );
};

export default App;

