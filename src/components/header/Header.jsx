

import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="Logo" />
                </Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                    <span>Popular Marvel Movies</span>
                </Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                    <span>Top Rated Marvel Movies</span>
                </Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                    <span>Upcoming Marvels</span>
                </Link>
            </div>
            <div className="headerRight">
                <form className="search-box" onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search for Marvels ..." 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                    />
                    <button type="submit" className="search-icon">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Header;
