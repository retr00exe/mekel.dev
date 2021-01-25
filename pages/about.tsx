import Footer from '../components/Footer';
import AboutContent from '../components/About';
import Navbar from '../components/Navbar';

const About = () => {
	return (
		<div className="flex flex-col h-screen justify-between">
			<Navbar />
			<div className="bg-gray-100">
				<AboutContent />
			</div>
			<Footer />
		</div>
	);
};

export default About;
