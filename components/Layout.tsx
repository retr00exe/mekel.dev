import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';

const Layout = () => {
	return (
		<>
			<Navbar />
			<div className="bg-gray-100">
				<h1 className="pt-4 text-center text-2xl font-bold ">My Posts</h1>
				<Content />
				<Content />
				<Content />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
