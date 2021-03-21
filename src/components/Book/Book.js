import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Book.css'
import logo from '../../images/images/Map.png';

const Book = () => {   
    const { vehicleType, imgUrl } = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {vehicleType} to go</h1>
            <img src={imgUrl} alt={vehicleType}/>
            <form action="">
                <input placeholder="From" type="text" name="" id=""/><br/>
                <input placeholder="To" type="text" name="" id=""/><br/>
                <Button ><Link className="search-button" to="/destination">search</Link></Button>              
            </form>              
            <p>Want a <Link to="/home">Different Vehicle?</Link> </p>
            <img src={logo} alt="Search Result" />
        </div>
    );
};

export default Book;