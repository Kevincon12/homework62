import { useState } from 'react'
import './App.css'
import Home from "./containers/Home/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main className='container mt-5'>
            <Home/>
        </main>
    </>
  )
};

export default App
