Movie Search App

A simple and responsive Movie Search Application built using React.js.
Users can search movies, filter by type, navigate through pages, and view detailed information for each movie.

---

🚀 Features

- 🔍 Search movies by title
- 🎭 Filter movies by type (Movie, Series, Episode)
- 📄 Pagination support
- 📖 View detailed movie information
- 🔙 Back navigation without losing state
- 💾 Local Storage support (stores search, page, results, and type)
- 🧹 Reset/Home button to clear all data

---

🛠️ Tech Stack

- Frontend: React.js
- Routing: React Router DOM
- API: OMDb API
- State Management: React Hooks ("useState", "useEffect")
- Storage: LocalStorage

---

📦 Installation

1. Clone the repository:
   
   git clone https://github.com/your-username/movie-search-app.git

2. Navigate to project folder:
   
   cd movie-search-app

3. Install dependencies:
   
   npm install

4. Start the development server:
   
   npm start

---

🔑 API Setup

This project uses the OMDb API.

1. Go to: https://www.omdbapi.com/
2. Get your API key
3. Create a ".env" file in the root folder:

REACT_APP_OMDB_API_KEY=your_api_key_here

---

📁 Project Structure

src/
│── components/
│ ├── MovieCard.jsx
│ ├── Pagination.jsx
│
│── pages/
│ ├── Home.jsx
│ ├── MovieDetail.jsx
│
│── api/
│ ├── omdb.js
│
│── App.jsx
│── main.jsx

---

🔄 Application Flow

1. User searches for a movie
2. API fetches results from OMDb
3. Results are displayed with pagination
4. Data is stored in localStorage:
   - search query
   - current page
   - movie results
   - selected type
5. User clicks a movie → navigates to detail page
6. Back button → returns to same state (no refresh)
7. Home button → clears all stored data

---

🧠 Key Concepts Used

- React Hooks ("useState", "useEffect")
- Conditional Rendering
- API Integration (Async/Await)
- Local Storage Handling
- Navigation using React Router
- State Persistence

---

🐞 Common Issues & Fixes

- State reset on back navigation
  → Fixed using localStorage + "navigate(-1)"

- Infinite re-render
  → Avoid dependencies like "[query]" in restore "useEffect"

- Search not clearing
  → Reset both localStorage and React state

---


---

🌟 Future Improvements

- ⭐ Add favorites/watchlist
- 🌙 Dark mode
- ⚡ Debounced search
- 📱 Better mobile UI

---

🙌 Acknowledgements

- OMDb API for movie data
- React documentation

---

📃 License

This project is open-source and available under the MIT License.

---

👨‍💻 Author

Your Name
GitHub: https://github.com/premasanub

---
Deployment Link:
deployed on Vercel: https://movie-search-app-pi.vercel.app/