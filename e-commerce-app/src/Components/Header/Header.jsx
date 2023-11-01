import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaOpencart } from "react-icons/fa";


const Header = () => {
    return (
        <nav className="p-4 fixed w-full top-0 bg-orange-400" style={{zIndex:999}}>
         <div className="container mx-auto flex justify-between items-center">
            <NavLink to="/" className= "font-medium text-xl text-white" exact>Tab28</NavLink>
            <NavLink to="/Cart" className={({isActive})=>`${isActive?"text-green-800":"text-white"} font-medium text-sm`}><FaOpencart size={30} /></NavLink>
          </div>
      </nav>
    );
}

export default Header;
