import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Navbar {
	active?: boolean;
	title?: string;
}

const Navbar = (props: Navbar) => {
	const router = useRouter();
	const fadeInUp = {
		initial: {
			y: -60,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};
	return (
		<NavbarItems>
			<motion.div
				exit={{ opacity: 0 }}
				initial="initial"
				animate="animate"
				className="container"
			>
				<span className="nav-logo">
					<Link href="/">
						<a>MKL.</a>
					</Link>
				</span>
				{props.active ? (
					<motion.div variants={fadeInUp}>
						<p>{props.title}</p>
					</motion.div>
				) : (
					<motion.ul variants={fadeInUp} className="link-container">
						<li className="nav-link">
							<Link href="/">
								<a className={router.pathname === '/' ? 'active' : ''}>Home</a>
							</Link>
						</li>
						<li className="nav-link">
							<Link href="/about">
								<a className={router.pathname === '/about' ? 'active' : ''}>
									About
								</a>
							</Link>
						</li>
						<li className="nav-link">
							<Link href="/contact">
								<a className={router.pathname === '/contact' ? 'active' : ''}>
									Contact
								</a>
							</Link>
						</li>
					</motion.ul>
				)}
			</motion.div>
		</NavbarItems>
	);
};

const NavbarItems = styled.nav`
	width: 100%;
	height: 4rem;
	position: fixed;
	top: 0;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	p {
		font-weight: 700;
	}
	.container {
		padding: 0 40px;
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
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
			margin: 10px 0;
			&:hover {
				background-color: #e200e2;
				cursor: pointer;
			}
		}
		.link-container {
			display: flex;
			margin-left: auto;
			align-items: center;
			.nav-link {
				display: inline-block;
				padding: 0 1rem;
				font-weight: 400;
				&:hover {
					color: #673ab7;
					cursor: pointer;
				}
				@media (max-width: 1024px) {
					padding: 0 0.5rem;
				}
			}
		}
	}
`;

export default Navbar;
