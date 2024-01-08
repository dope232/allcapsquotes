// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/quotes/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleRandomizeClick = () => {
    fetchRandomQuote();
  };

  return (
    <>
      <div className='container'>
        <h1 className='quote'>ALL CAPS WHEN YOU SPELL THE MAN'S NAME </h1>
        <p className='quotetext'>{quote.text}</p>
        <p className='quotename'>— {quote.author}</p>
        <button onClick={handleRandomizeClick} className='button'>
          Randomize Quote
        </button>
      </div>
      <div className='spotify-container'>
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1nxlXq?utm_source=generator&theme=0"
          width="500px"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default App;
