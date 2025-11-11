Tugas 6 - API Create & Get (MongoDB Atlas) - Christine

Struktur:
- backend/   (Express + Mongoose)
- frontend/  (React + Vite)

Persiapan:
1. File backend/.env sudah terisi dengan MONGO_URI yang kamu berikan.
   (MONGO_URI points to: mongodb+srv://admin:***@cluster0.kiqcw6l.mongodb.net/tugas6_buku)
2. Jika ingin mengganti credential, edit backend/.env

Cara menjalankan:
1. Backend:
   cd backend
   npm install
   npm run dev   # membutuhkan nodemon (devDependencies), atau npm start
2. Frontend:
   cd frontend
   npm install
   npm run dev   # Vite akan menampilkan alamat (biasanya http://localhost:5173)
3. Tes API:
   - GET http://localhost:3000/books
   - POST http://localhost:3000/books  (body JSON: { "title": "...", "author": "..." })

Postman collection disertakan: Tugas6-Postman-Collection.json
