import React from 'react';
import { useState } from 'react';

import './style.css';
import Autocomplete from './Autocomplete';

const App = () => {
  const [input, setInput] = useState('');

  return (
    <div className="wrapper">
      <Autocomplete
        suggestions={[
          'Angular',
          'Blitzjs',
          'Gatsby',
          'Reactjs',
          'Vuejs',
          'Svelte',
          'Nextjs',
          'Node',
          'Express',
          'Sails',
          'Loopback',
          'React-router',
          'Redux',
          'Flux',
          'Yarn',
          'Npm',
        ]}
        input={input}
        setInput={setInput}
      />
    </div>
  );
};

export default App;
