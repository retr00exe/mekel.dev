import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { fadeInDown } from '@core/utils/animate';
import { navbar } from '@core/data/layout';
import useResize from '@core/hooks/useResize';

// TODO: Remove spaghetti code & make code more cleaner :(

const Navbar: React.FC = (): JSX.Element => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	const isMobile = useResize().width <= 640;
	const [isOpen, setOpen] = useState<boolean>(false);

	const toogleMenu = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<NavbarItems as={motion.nav} exit={{ opacity: 0 }} initial="initial" animate="animate">
				<div className="container">
					{!isMobile ? (
						<NavigationMain router={router} theme={theme} setTheme={setTheme} />
					) : (
						<NavigationMobile
							router={router}
							theme={theme}
							setTheme={setTheme}
							toogleMenu={toogleMenu}
							isOpen={isOpen}
						/>
					)}
				</div>
			</NavbarItems>
			<MenuScreen isOpen={isOpen} router={router} />
		</>
	);
};

const menuVariants = {
	open: {
		transform: 'translateY(0%)',
	},
	closed: {
		transform: 'translateY(-100%)',
	},
};

const menuTransition = {
	type: 'spring',
	duration: 1,
	stiffness: 33,
	delay: 0.1,
};

interface Menu {
	router: {
		pathname: string;
	};
	isOpen: boolean;
}

const MenuScreen: React.FC<Menu> = ({ router, isOpen }: Menu): JSX.Element => {
	return (
		<MenuContainer
			as={motion.div}
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			variants={menuVariants}
			transition={menuTransition}
		>
			<motion.ul variants={fadeInDown}>
				{navbar.map((page, i) => (
					<li className="nav-link" key={i}>
						<Link href={page.href}>
							<a className={router.pathname === page.href ? 'active' : ''}>{page.title}</a>
						</Link>
					</li>
				))}
			</motion.ul>
		</MenuContainer>
	);
};

const MenuContainer = styled(motion.div)`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background-color: #fff;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 10;
	transform: translateY(-100%);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
		text-align: center;
		line-height: 2.5rem;
	}
`;

interface Props {
	router: {
		pathname: string;
	};
	theme: string;
	setTheme: (arg0: string) => void;
	toogleMenu?: () => void;
	isOpen?: boolean;
}

const NavigationMain = ({ router, theme, setTheme }: Props): JSX.Element => {
	return (
		<>
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
			{/* <motion.span
				variants={fadeInDown}
				className="theme-toogle"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? <FiMoon /> : <FiSun />}
			</motion.span> */}
		</>
	);
};

const NavigationMobile = ({ theme, setTheme, toogleMenu, isOpen }: Props): JSX.Element => {
	return (
		<>
			<motion.span variants={fadeInDown}>
				<MenuToogle toogle={toogleMenu} isOpen={isOpen} />
			</motion.span>
			<motion.span variants={fadeInDown} className="nav-logo">
				<Link href="/">
					<a>MKL.dev</a>
				</Link>
			</motion.span>
			{/* <motion.span
				variants={fadeInDown}
				className="theme-toogle"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? <FiMoon /> : <FiSun />}
			</motion.span> */}
		</>
	);
};

interface Toogle {
	toogle: () => void;
	isOpen: boolean;
}

const transition = { duration: 0.3 };

const MenuToogle: React.FC<Toogle> = ({ toogle, isOpen }: Toogle): JSX.Element => {
	return (
		<div onClick={toogle}>
			<svg width="24" height="24" viewBox="0 0 24 24">
				<Path
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: { d: 'M 2 7.5 L 20 7.5', stroke: 'hsl(0, 0%, 18%)' },
						open: { d: 'M 3 22.5 L 17 7.5', stroke: 'hsl(0, 0%, 18%)' },
					}}
					transition={transition}
				/>
				<Path
					d="M 2 15 L 20 15"
					stroke="hsl(0, 0%, 18%)"
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={transition}
				/>
				<Path
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: { d: 'M 2 22.5 L 15 22.5', stroke: 'hsl(0, 0%, 18%)' },
						open: { d: 'M 3 7.5 L 17 22.5', stroke: 'hsl(0, 0%, 18%)' },
					}}
					transition={transition}
				/>
			</svg>
		</div>
	);
};

const Path = (props): JSX.Element => {
	return <motion.path fill="transparent" strokeLinecap="round" strokeWidth="3" {...props} />;
};

const NavbarItems = styled(motion.nav)`
	width: 100%;
	height: 4.25rem;
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
		margin-left: 1.25rem;
		cursor: pointer;
		@media (max-width: 768px) {
			margin-left: 0;
		}
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
