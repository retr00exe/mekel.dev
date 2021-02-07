import Head from 'next/head';
import Navbar from '../components/Navbar';
import ContactContent from '../components/Contact';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<ContactContent />
			<Footer />
		</>
	);
};

export default Contact;
