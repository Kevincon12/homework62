import {type ReactNode, useState} from 'react'
import './App.css'
import Home from "./containers/Home/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import About from "./containers/About/About.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";

const App = () => {
    const [location, setLocation] = useState<string>("home");

    let content: ReactNode = null;

    if (location === 'home') {
        content = (<Home/>)
    } else if (location === 'about') {
        content = (<About/>)
    } else if (location === 'contacts') {
        content = (<Contacts/>)
    }

    const changeLocation = (location: string) => {
        setLocation(location);
    }

  return (
    <>
        <header>
            <Navbar changeLocation={changeLocation}/>
        </header>
        <main className='container mt-5'>
            {content}
        </main>
    </>
  )
};

export default App
