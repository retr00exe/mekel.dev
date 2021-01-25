import Navbar from '../components/Navbar';
import ContactContent from '../components/Contact';
import Footer from '../components/Footer';

const Contact = () => {
	return (
		<div className="flex flex-col h-screen justify-between text-center">
			<Navbar />
			<ContactContent />
			<Footer />
		</div>
	);
};

export default Contact;
