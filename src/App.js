import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { useBeforeunload } from 'react-beforeunload';

function App() {

  const [value, setValue] = useState('');

  useBeforeunload((event) => {
      event.preventDefault();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <div>
           <p>Please, type any word in a field below and then close the browser to see a confirmation</p>
         <input onChange={(event) => setValue(event.target.value)} value={value} />
         </div>
      </header>
    </div>
  );
}

export default App;
