import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { fadeInDown } from '@core/utils/animate';
import { navbar } from '@core/data/layout';

const Navbar: React.FC = (): JSX.Element => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	return (
		<NavbarItems as={motion.nav} exit={{ opacity: 0 }} initial="initial" animate="animate">
			<div className="container">
				<motion.span variants={fadeInDown} className="nav-logo">
					<Link href="/">
						<a>MKL.dev</a>
					</Link>
				</motion.span>
				<motion.ul variants={fadeInDown} className="link-container">
					{navbar.map((page, i) => (
						<li className="nav-link" key={i}>
							<Link href={page.href}>
								<a className={router.pathname === page.href ? 'active' : ''}>{page.title}</a>
							</Link>
						</li>
					))}
				</motion.ul>
				<motion.span
					variants={fadeInDown}
					className="theme-toogle"
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				>
					{theme === 'light' ? <FiMoon /> : <FiSun />}
				</motion.span>
			</div>
		</NavbarItems>
	);
};

const NavbarItems = styled(motion.nav)`
	width: 100%;
	height: 4.5rem;
	position: fixed;
	top: 0;
	background-color: var(--navColor);
	padding: 0 40px;
	z-index: 100;
	transition-duration: 0.6s;
	transition-timing-function: ease-in-out;
	justify-content: space-between;
	backdrop-filter: blur(20px);
	.container {
		height: 100%;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.theme-toogle {
		display: flex;
		align-items: center;
		font-size: 1rem;
		background-color: rgba(243, 244, 246, 1);
		border-radius: 0.4rem;
		padding: 0.5rem;
		margin-left: 20px;
		cursor: pointer;
	}
	.nav-logo {
		display: flex;
		align-items: center;
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: 500;
		background-color: #202020;
		border-radius: 0.25rem;
		color: white;
		padding: 0.35rem 0.5rem;
		margin: 0 1rem 0 0;
		font-family: Gotham;
		&:hover {
			background-color: #e200e2;
			cursor: pointer;
		}
	}
	.link-container {
		display: flex;
		margin-left: auto;
		align-items: center;
		padding-inline-start: 0 !important;
		@media (max-width: 768px) {
			margin-left: 0;
		}
		.nav-link {
			display: inline-block;
			padding: 0 1rem;
			font-weight: 400;
			color: var(--colorPrimary);
			font-size: 1.05rem;
			&:hover {
				color: var(--navHoverColor);
				cursor: pointer;
			}
			@media (max-width: 1024px) {
				padding: 0 0.5rem;
			}
		}
	}
`;

export default Navbar;
