import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { fadeInDown } from '@core/utils/animate';
import { navbar } from '@core/data/layout';

interface Props {
	active?: boolean;
	title?: string;
}

const Navbar: React.FC<Props> = ({ active, title }: Props) => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	return (
		<NavbarItems
			as={motion.nav}
			exit={{ opacity: 0 }}
			initial="initial"
			animate="animate"
			className="container"
		>
			{active ? (
				/**
				 * Show post title when scrooling
				 */
				<motion.div variants={fadeInDown}>
					<p
						onClick={() =>
							window.scroll({
								top: 0,
								left: 0,
								behavior: 'smooth',
							})
						}
						style={{ overflow: 'hidden' }}
					>
						{title}
					</p>
				</motion.div>
			) : (
				/**
				 * Show default navbar
				 */
				<>
					<motion.span variants={fadeInDown} className="nav-logo">
						<Link href="/">
							<a>MKL.</a>
						</Link>
					</motion.span>
					<motion.ul variants={fadeInDown} className="link-container">
						{navbar.map((page, i) => (
							<li className="nav-link" key={i}>
								<Link href={page.href}>
									<a className={router.pathname === page.href ? 'active' : ''}>
										{page.title}
									</a>
								</Link>
							</li>
						))}
					</motion.ul>
				</>
			)}
			<motion.span
				variants={fadeInDown}
				className="theme-toogle"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? <FiMoon /> : <FiSun />}
			</motion.span>
		</NavbarItems>
	);
};

const NavbarItems = styled(motion.nav)`
	width: 100%;
	height: 3.5rem;
	position: fixed;
	top: 0;
	background-color: var(--navColor);
	padding: 0 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	transition-duration: 0.6s;
	transition-timing-function: ease;
	justify-content: space-between;
	p {
		font-weight: 500;
		cursor: pointer;
		color: var(--colorPrimary);
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
		&:hover {
			background-color: #e200e2;
			cursor: pointer;
		}
	}
	.link-container {
		display: flex;
		margin-right: auto;
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
