import React from 'react';
import { Header, Footer, Blog, Possibility, Features, WhatGPT3 } from './Containers';
import { Article, Brand, Cta, Feature, Navbar } from './Components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradinet__bg">
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <Brand></Brand>
            <WhatGPT3></WhatGPT3>
            <Features></Features>
            <Possibility></Possibility>
            <Cta></Cta>
            <Blog></Blog>
            <Footer></Footer>

        </div>
    );
};

export default App;