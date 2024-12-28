import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../../assets/image copy.png";
import { HiBars3 } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";



function Header() {
    return (
        <header>
            <div className='header_box'>

            {/* <div  className="logo"> */}
                <Link className='logo' to="/">
                <img src={logo} alt="" />
                <h3><span>Tezkor</span> Market</h3>
                </Link>
            {/* </div> */}
            {/* <div className="catagory_btn">
                < HiBars3 />
                <p>Catagory</p>
            </div> */}
            <div className="search_bar">
                <input type="text" placeholder='Search' />
                <button className='search_btn'><GoSearch className='search_btn' /></button>
            </div>
            {/* <div className="Header_cart">
                <RiShoppingCart2Fill />
            </div> */}
            <div className="header_login">
                <button>Login</button>
            </div>

            </div>

        </header>

    )
}

export default Header