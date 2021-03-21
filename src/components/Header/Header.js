import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/images/Bg.png';
import logo from '../../images/images/peopleicon.png';
import { Grid } from '@material-ui/core';

const Header = () => {
    return (
        <Grid>
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
                <nav className="nav">
                    <ul>
                        <li>
                            <img className="logo" src={logo} alt="" />
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/login">Destination</Link>
                        </li>
                        <li>
                            <Link className="btn-book" to="/book">Book</Link>
                        </li>
                    </ul>
                </nav>
                <div className="title-container">
                    <h2>Transport Luxury</h2>
                </div>
            </div>
        </Grid>

    );
};

export default Header;