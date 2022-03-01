import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {
    const [categories] = useState([
        { name: 'About Me', description: 'About Me' },
        { name: 'Projects', description: 'My projects' }
    ]);
}


export default App;