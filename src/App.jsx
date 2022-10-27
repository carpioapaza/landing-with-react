import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Reviews } from './Components/Reviews';
import { Footer } from './Components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header />
      <Hero />
      <About />
      {/* <Reviews /> */}
      <Footer />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
