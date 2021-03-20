import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Book.css'
import logo from '../../images/images/4 Search.png';




const Book = () => {
   
    const {vehicleType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {vehicleType}.</h1>
            <form action="">
                <p>From</p>
                <input type="text" name="" id=""/>
                <p>To</p>
                <input type="text" name="" id=""/><br/><br/>
                <Button ><Link className="search-button" to="/destination">search</Link></Button><br/>                
            </form>              
            <p>Want a <Link to="/home">Different Vehicle?</Link> </p>
            <img src={logo} alt="Search Result" />
        </div>
    );
};

export default Book;