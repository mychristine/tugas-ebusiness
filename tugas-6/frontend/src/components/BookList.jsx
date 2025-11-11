import React, { useEffect, useState } from 'react';

export default function BookList(){
  const [books, setBooks] = useState([]);

  const fetchBooks = async ()=>{
    try{
      const res = await fetch('http://localhost:3000/books');
      if(!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setBooks(data);
    }catch(err){
      console.error(err);
      alert('Gagal mengambil data: '+err.message);
    }
  }

  useEffect(()=>{
    // optional: auto fetch on load
    fetchBooks();
  },[]);

  return (
    <div>
      <h3>Daftar Buku</h3>
      <button onClick={fetchBooks} className="btn">Ambil Data</button>
      <ul className="list">
        {books.map(b=>(
          <li key={b._id}><strong>{b.title}</strong> — {b.author}</li>
        ))}
      </ul>
    </div>
  )
}
