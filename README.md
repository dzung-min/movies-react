# React Movie Listing Application

A modern, responsive Single-Page Application (SPA) built with **React** that allows users to discover movies, filter by genres, search for specific titles, and watch trailers. The application fetches real-time data from a public movie API (such as TMDB) and utilizes dynamic client-side routing.

---

## Features

- **Dynamic Movie Discovery**: Fetches and displays trending and top-rated movies in real-time from a public API.
- **Genre-Based Filtering**: Users can browse and filter movies based on specific categories (e.g., Action, Sci-Fi, Drama).
- **Instant Search**: Debounced search functionality to query movies by title instantly.
- **Trailer Integration**: Embedded video modal allowing users to watch official movie trailers directly inside the app.
- **Robust Client-Side Routing**: Implemented via React Router for smooth navigation between Home, Movie Details, and Category views without page reloads.
- **Modern Pure CSS UI**: Styled completely with custom, responsive CSS grid and flexbox layout.

---

## Tech Stack

- **Frontend Core**: React (Functional Components & Hooks)
- **Routing**: React Router v6
- **Data Fetching**: Axios / Native Fetch API
- **Styling**: Pure CSS3 (Component-scoped / CSS Modules)
- **Build Tool**: Vite or Create React App

---

## Setup & Installation

### Prerequisites
- Node.js 20+

### Clone the repository
```bash
git clone https://github.com/dzung-min/movies-react.git
cd movies-react
```

### Install dependencies
```bash
npm install
```

### Run
```bash
npm run dev
```