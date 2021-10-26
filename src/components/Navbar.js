import React,{useState} from 'react'
import './Navbar.css'
import {FiMenu,FiX} from 'react-icons/fi';



const Navbar = ({ navbarLinks }) => {

    const [menuCliked,setMenuCliked] = useState(false)
    return (
        <div className="navbar">
            <span className="logo">Travel</span>
            {menuCliked ?(
                <FiX size={25} className="burger" onClick={()=>setMenuCliked(!menuCliked)} />
            ) : (
                <FiMenu size={25} className="burger" onClick={()=>setMenuCliked(!menuCliked)} />

            )}
            <ul className={!menuCliked ? "navbarList" : "navbarList navbarList--active "}>
                {navbarLinks.map((item) => {
                    return <li className="navbarItem" key={item.title}>
                        <a className="navLink" href={item.url}>
                            {item.title}
                        </a>

                    </li>
                })}
            </ul>

        </div>
    )
}

export default Navbar
