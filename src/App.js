import Featured from './components/Featured'
import Nav from './components/Nav';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
