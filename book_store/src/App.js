import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import AddBook from './components/AddBook'
import About from './components/About'
import Books from './components/Book/Books';
import BookDetail from './components/Book/BookDetail';

const App = () => {
  return (
    <React.Fragment>
   <header>
    <Header/>
   </header>

  <main>
    <Routes>
      <Route path='/' element={<Home/>} exact></Route>
      <Route path='/add' element={<AddBook/>} exact></Route>
      <Route path='/books' element={<Books/>} exact></Route>
      <Route path='/about' element={<About/>} exact></Route>
      <Route path='/books/:id' element={<BookDetail/>} exact></Route>

    </Routes>
  </main>
  </React.Fragment>
  );
}

export default App