import styled from 'styled-components';

const Contact = () => {
	return (
		<ContactWrapper>
			<div className="container">
				<h1>Contact</h1>
			</div>
		</ContactWrapper>
	);
};

const ContactWrapper = styled.div`
	padding: 4rem 0;
	background-color: rgba(243, 244, 246, 1);
	.container {
		width: 800px;
		margin: 0 auto;
		padding: 5rem 0;
	}
`;

export default Contact;
