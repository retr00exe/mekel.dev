import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner: React.FC = () => {
	return (
		<div className="w-full h-[100vh] flex-cc">
			<Loader type="Bars" color="#e200e2" height={50} width={50} />
		</div>
	);
};

export default Spinner;
