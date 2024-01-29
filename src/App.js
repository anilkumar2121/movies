// App.js
import React from 'react';
import MoviesList from './Components/MoviesList';
import { createContext, useState } from 'react';
import Display from './Components/Display';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDisplay from './Components/MoviesDisplay';
import hello from "../src/Components/Assets/hello.jpg"
import patas from "../src/Components/Assets/patas.jpg"

export const store = createContext();

function App() {
  const [data, setData] = useState([
    {
      MovieName: 'Hello',
      rating: 0,
      image:hello,
    },
    {
      MovieName: 'Patas',
      rating: 0,
      image:patas,
    },
  ]);

  return (
    <store.Provider value={{ data, setData }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/display" element={<Display />} />
            <Route path="/movie/:movieIndex" element={<MovieDisplay />} />
          </Routes>
        </div>
      </Router>
    </store.Provider>
  );
}

export default App;
