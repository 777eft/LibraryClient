import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  const [books, setBooks] = useState();

  const getBooks = async () => {

    try {
      const response = await api.get("/api/v1/books/all-books");

      console.log(response.data);
      setBooks(response.data);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
