import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from './data'
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import React, { useState, useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div>
        <Nav>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" exact element={<Books books={books} />} />
            <Route path="/books/:id" exact element={<BookInfo books={books} addToCart={addToCart}/>} />
            <Route path="/cart" render={() => <Cart books={books} cart={cart} />} />
          </Routes>
        </Nav>
      </div>
    </Router>
  )
}

export default App;