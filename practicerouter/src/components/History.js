import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const History = () => {
    return (
        <div>
            <p>Once a pon a time ...</p>
            <img src="https://medias.liberation.fr/photo/1117194-capture.jpg?modified_at=1524846171&width=750" alt="" />

            <Link to="/">Home page</Link>
        </div>
    )
}

export default History;
