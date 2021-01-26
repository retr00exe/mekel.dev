import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<NavbarItems>
			<div className="flex mx-auto justify-between lg:w-3/5 lg:mx-auto">
				<div className="nav-logo">
					<Link href="/">
						<a>MKL.</a>
					</Link>
				</div>
				<div className="nav-links">
					<div className="nav-link">
						<Link href="/">
							<a>Home</a>
						</Link>
					</div>
					<div className="nav-link">
						<Link href="/about">
							<a>About</a>
						</Link>
					</div>
					<div className="nav-link">
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</div>
				</div>
			</div>
		</NavbarItems>
	);
};

const NavbarItems = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 4rem;
	background-color: #fff;
	display: flex;
	align-items: center;

	.nav-logo {
		display: flex;
		align-items: center;
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: 500;
		background-color: black;
		border-radius: 4px;
		color: white;
		padding: 0 8px;
		margin: 10px 1rem;
		&:hover {
			background-color: #e200e2;
		}
	}

	.nav-links {
		display: flex;
		.nav-link {
			display: inline-block;
			font-size: 0.9rem;
			padding: 1rem;
			font-weight: 400;
			&:nth-child(1) {
				color: magenta;
				font-weight: 600;
			}
			&:hover {
				color: magenta;
			}
		}
	}
`;

export default Navbar;
