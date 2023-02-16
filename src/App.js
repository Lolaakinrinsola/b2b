import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import  Header  from './components/Header';
import  Body  from './components/Body';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
