import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Header from './components/Header';
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters/`
      )

      console.log(result.data) 
    }
    fetchItems()
  }, [])
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;