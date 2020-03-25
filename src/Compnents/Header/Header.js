import React from 'react';
import logo from '../../images/logo-1.png';
import '../Header/Header.css';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/><h3>Salary Calculation Application</h3>
        </div>
    );
};
export default Header;