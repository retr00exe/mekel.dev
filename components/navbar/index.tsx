import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
			<motion.nav
				exit={{ opacity: 0 }}
				initial="initial"
				animate="animate"
				className="w-full h-[4.25rem] fixed top-0 bg-[#ffffffcc] px-[40px] z-50 duration-[600ms] ease-in-out justify-between backdrop-blur-lg"
			>
				<div className="h-full w-full max-w-[1000px] mx-auto flex-bc">
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
			</motion.nav>
			<MenuScreen isOpen={isOpen} router={router} />
		</>
	);
};

interface Menu {
	router: {
		pathname: string;
	};
	isOpen: boolean;
}

const MenuScreen: React.FC<Menu> = ({ router, isOpen }: Menu): JSX.Element => {
	return (
		<motion.div
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			variants={menuVariants}
			transition={menuTransition}
			className="w-full h-full min-h-[100vh] bg-white fixed top-0 right-0 z-10 flex-cc col translate-y-full"
		>
			<motion.ul variants={fadeInDown} className="list-none m-0 p-0 text-2xl text-center">
				{navbar.map((page, i) => (
					<li className="nav-link" key={i}>
						<Link href={page.href}>
							<a className={router.pathname === page.href ? 'active' : ''}>{page.title}</a>
						</Link>
					</li>
				))}
			</motion.ul>
		</motion.div>
	);
};

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
			<motion.span
				variants={fadeInDown}
				className="flex-cc uppercase font-medium bg-[#202020] rounded-md text-white px-2 py-1 hover:bg-[#e200e2] hover:cursor-pointer"
			>
				<Link href="/">
					<a>MKL.dev</a>
				</Link>
			</motion.span>
			<motion.ul variants={fadeInDown} className="flex-cc ml-auto -md:ml-0">
				{navbar.map((page, i) => (
					<li
						className="inline-block py-0 px-4 font-normal text-black text-[1.05rem] hover:cursor-pointer hover:text-[#e200e2] -lg:px-2 -lg:py-0"
						key={i}
					>
						<Link href={page.href}>
							<a className={router.pathname === page.href ? 'active' : ''}>{page.title}</a>
						</Link>
					</li>
				))}
			</motion.ul>
			<motion.span
				variants={fadeInDown}
				className="flex-cc bg-[#f3f4f6] rounded-md p-2 ml-5 cursor-pointer -md:ml-0"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? <FiMoon /> : <FiSun />}
			</motion.span>
		</>
	);
};

const NavigationMobile = ({ theme, setTheme, toogleMenu, isOpen }: Props): JSX.Element => {
	return (
		<>
			<motion.span variants={fadeInDown}>
				<MenuToogle toogle={toogleMenu} isOpen={isOpen} />
			</motion.span>
			<motion.span
				variants={fadeInDown}
				className="flex-cc uppercase font-medium bg-[#202020] rounded-md text-white px-2 py-1 hover:bg-[#e200e2] hover:cursor-pointer"
			>
				<Link href="/">
					<a>MKL.dev</a>
				</Link>
			</motion.span>
			<motion.span
				variants={fadeInDown}
				className="flex-cc bg-[#f3f4f6] rounded-md p-2 ml-5 cursor-pointer -md:ml-0"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? <FiMoon /> : <FiSun />}
			</motion.span>
		</>
	);
};

interface Toogle {
	toogle: () => void;
	isOpen: boolean;
}

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

const transition = { duration: 0.3 };

export default Navbar;
