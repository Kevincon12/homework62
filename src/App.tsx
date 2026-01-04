import './App.css'
import Home from "./containers/Home/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import About from "./containers/About/About.tsx";
import {Routes, Route} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts.tsx";

const App = () => {

  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main className='container mt-5'>
            <Routes>
                <Route path='/' element={(<Home/>)}/>
                <Route path='/about' element={(<About/>)}/>
                <Route path='/contacts' element={(<Contacts/>)}/>
            </Routes>
        </main>
    </>
  )
};

export default App
