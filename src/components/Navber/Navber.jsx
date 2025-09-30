import React from 'react'
import NavLogo from "../../assets/logo.png"
import CoinIon from "../../assets/images-removebg-preview.png"
export const Navber = ({avalalibleBalence}) => {
    return (

        <div className="navbar bg-base-100 shadow-sm container mx-auto lg:px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a className=" btn-ghost text-xl"><img className='h-15 w-15' src={NavLogo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='font-semibold'>Home</a></li>
                    <li><a className='font-semibold'>Fixture</a> </li>
                    <li><a className='font-semibold'>Teams</a></li>
                    <li><a className='font-semibold'>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <span className='font-bold'>{avalalibleBalence}</span>
                <span className='ml-2 font-semibold'>Coin</span>
              <img className='h-10 w-12' src={CoinIon} alt="" />
            </div>
        </div>

    )
}
