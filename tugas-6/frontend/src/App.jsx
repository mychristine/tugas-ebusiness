import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList.jsx';
import AddBook from './components/AddBook.jsx';

export default function App(){
  return (
    <Router>
      <div className="nav">
        <h2>Daftar Buku</h2>
        <div>
          <Link to="/">Home</Link> | <Link to="/add">Tambah</Link>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  )
}
