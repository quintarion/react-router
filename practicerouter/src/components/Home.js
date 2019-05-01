import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Home = () => {
    return (
        <div>
            <img src="https://s-i.huffpost.com/gen/960941/thumbs/s-CERVEAUSHADOK-400x400.jpg?15" alt=""/>

            <Link to={'/history'} activeStyle={{color: "red"}}>Cliquez ici pour aller sur la page 'History'</Link>

        </div>
    )
};

export default Home;

