import { useState } from 'react'
import './App.css'
import Container from '../container/Container.jsx';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Container />
    <Footer />
    </>
  )
}

export default App
