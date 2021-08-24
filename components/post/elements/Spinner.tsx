import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner: React.FC = () => {
	return (
		<SpinnerContainer>
			<Loader type="Bars" color="#e200e2" height={50} width={50} />
		</SpinnerContainer>
	);
};

const SpinnerContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export default Spinner;
