import React from 'react';
import styled from 'styled-components';

const Image: React.FC = (props) => {
	return <ImageWrapper {...props} id="post-image" />;
};

const ImageWrapper = styled.img`
	margin: 1rem 0;
	max-width: 100%;
`;

export default Image;
