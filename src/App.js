import Dropdown from './components/Dropdown';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Start from './pages/Start';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
    const [dropDownIsOpen, setdropDownIsOpen] = useState(false);

    function toggleDropdown() {
        setdropDownIsOpen(!dropDownIsOpen);
    }

    return (
        <div>
            <h2>Hej</h2>
            <div className={`menu-ctn${dropDownIsOpen ? ' open' : ''}`}>
                <img
                    alt=''
                    src='images/menu1.svg'
                    className='menu-icon'
                    onClick={toggleDropdown}
                />
                <Dropdown onClick={toggleDropdown} />
            </div>
            <Switch>
                <Route path='/' exact>
                    <Start />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/skills'>
                    <Skills />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
