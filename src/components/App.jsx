import { useState } from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Main from '../Main/Main.jsx';
import Author from './Author/Author.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='page__content'>
    <Header />
    <Main />
    <Author />
    <Footer />
    </div>
    </>

  )
}

export default App
