import React from 'react';
import {Link} from 'react-router-dom';

export const Header = ({title}) => (
    <header>
        <h2>{title}</h2>
        <Link to={'/'}>Home</Link>
    </header>
);