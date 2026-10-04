import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from './data'
import BookInfo from './pages/BookInfo';

function App() {
  return (
    <Router>
      <div>
        <Nav>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" exact element={<Books books={books} />} />
            <Route path="/books/:id" exact element={<BookInfo books={books} />} />
          </Routes>
        </Nav>
      </div>
    </Router>
  )
}

export default App;