import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

interface Navbar {
	active?: boolean;
	title?: string;
}

const Navbar = (props: Navbar) => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
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
				{props.active ? (
					<motion.div variants={fadeInUp}>
						<p
							onClick={() =>
								window.scroll({ top: 0, left: 0, behavior: 'smooth' })
							}
						>
							{props.title}
						</p>
					</motion.div>
				) : (
					<>
						<motion.span variants={fadeInUp} className="nav-logo">
							<Link href="/">
								<a>MKL.</a>
							</Link>
						</motion.span>
						<motion.ul variants={fadeInUp} className="link-container">
							<li className="nav-link">
								<Link href="/">
									<a className={router.pathname === '/' ? 'active' : ''}>
										Home
									</a>
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
					</>
				)}
				<motion.span
					variants={fadeInUp}
					className="theme-toogle"
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				>
					{theme === 'light' ? <FiMoon /> : <FiSun />}
				</motion.span>
			</motion.div>
		</NavbarItems>
	);
};

const NavbarItems = styled.nav`
	width: 100%;
	height: 4rem;
	position: fixed;
	top: 0;
	background-color: var(--navColor);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	transition-duration: 0.6s;
	transition-timing-function: ease;
	p {
		font-weight: 500;
		cursor: pointer;
		color: var(--colorPrimary);
	}
	.container {
		padding: 0 40px;
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		.theme-toogle {
			display: flex;
			align-items: center;
			font-size: 1rem;
			background-color: rgba(243, 244, 246, 1);
			border-radius: 4px;
			padding: 0 8px;
			margin: 10px 0;
			cursor: pointer;
		}
		.nav-logo {
			display: flex;
			align-items: center;
			font-size: 1rem;
			text-transform: uppercase;
			font-weight: 500;
			background-color: #101012;
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
				color: var(--colorPrimary);
				&:hover {
					color: var(--navHoverColor);
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
