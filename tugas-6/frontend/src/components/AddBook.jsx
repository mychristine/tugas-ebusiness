import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddBook(){
  const [form, setForm] = useState({title:'', author:''});
  const navigate = useNavigate();

  const onChange = e => setForm({...form, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      if(!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Server error');
      }
      alert('Buku ditambahkan');
      navigate('/');
    }catch(err){
      alert('Error: '+err.message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <h3>Tambah Buku</h3>
      <input name="title" placeholder="Judul" value={form.title} onChange={onChange} required />
      <input name="author" placeholder="Penulis" value={form.author} onChange={onChange} required />
      <button type="submit">Simpan</button>
    </form>
  )
}
