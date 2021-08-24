import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Custom404: React.FC = () => {
	return (
		<Wrapper>
			<Link href="/">
				<img
					src="https://res.cloudinary.com/retr00exe/image/upload/v1613916236/404-crop_sm7axm.gif"
					className="monitor"
				/>
			</Link>
			<p>
				Error <b>404</b> not found, click the monitor to find way out.
			</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	.monitor {
		cursor: pointer;
		width: 40%;
		height: 40%;
	}
	p {
		font-family: 'Courier New', Courier, monospace;
		font-size: 1.1rem;
		b {
			font-size: 1.5rem;
		}
	}
	@media screen and (max-width: 768px) {
		flex-direction: column;
		.monitor {
			width: 100%;
			height: 100%;
		}
		p {
			font-size: 1rem;
			b {
				font-size: 1.2rem;
			}
		}
	}
`;

export default Custom404;
