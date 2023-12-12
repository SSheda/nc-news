import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Account from './pages/Account';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import { useState } from 'react';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState("")
  const [allArticles, setAllArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [topics, setTopics] = useState([])
  return (
    <div className="app">
      <NavBar />
      <h1 className='header'>NC NEWS</h1>
      <Search search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home
          allArticles={allArticles}
          setAllArticles={setAllArticles}
          setIsLoading={setIsLoading}
          setSearch={setSearch}
          isLoading={isLoading} search={search}
          setTopics={setTopics} topics={topics} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
