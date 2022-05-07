import React from 'react'
import { Link } from 'react-router-dom'
import { NavWrapper } from './Navbar.styled'

export const Navbar = () => {
  return (
    <div>
         <NavWrapper >
            <div >
				<Link to="/">Home</Link>
			</div>
        <div >
				<Link to="/mystery">Mystery</Link>
			</div>
            <div >
				<Link to="/technology">Technology</Link>
			</div>
			<div >
				<Link to="/mythology">Mythology</Link>
			</div>
			<div >
				<Link to="/history">History</Link>
			</div>
		</NavWrapper>
    </div>
  )
}
