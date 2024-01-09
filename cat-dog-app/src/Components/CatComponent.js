import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatComponent = () => {
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    axios.get('https://catfact.ninja/fact')
      .then(response => setCatFact(response.data.fact))
      .catch(error => console.error('Error fetching cat fact', error));
  }, []);

  return (
    <div>
      <h2>Cat Fact</h2>
      <h3>{catFact}</h3>
    </div>
  );
};

export default CatComponent;
