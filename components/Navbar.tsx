import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components' 

const Navbar = () => {
	return (
		<NavbarItems>
			<NavLogo><Link href="/"><a>MKL.</a></Link></NavLogo>
			<NavLinks>
				<NavLink><Link href="/"><a>Home</a></Link></NavLink>
				<NavLink><Link href="/about"><a>About</a></Link></NavLink>
				<NavLink><Link href="/contact"><a>Contact</a></Link></NavLink>
			</NavLinks>
		</NavbarItems>
	);
}

const NavbarItems = styled.nav.attrs({
	className: "mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto"
})`
	display: flex;
	align-items: center;
`

const NavLogo = styled.div`
	box-sizing: border-box;
	font-size: 1.3rem;
	text-transform: uppercase;
	font-weight: 500;
	background-color: black;
	border-radius: 4px;
	color: white;
	padding: 0 5px;
	margin-left: 20px;
	&:hover {
		background-color: #e200e2;
	}
`

const NavLinks = styled.ul`
	margin-left: auto;
	display: flex;
`

const NavLink = styled.li`
	display: inline-block;
	font-size: 0.9rem;
	padding: 1rem;
	font-weight: 400;
	&:nth-child(1){
		color:magenta;
		font-weight: 600;
	}
	&:hover {
		color:magenta;
	}
`

export default Navbar;
