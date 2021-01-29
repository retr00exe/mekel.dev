import styled from 'styled-components';
import {
	FaGithub,
	FaStackOverflow,
	FaHackerrank,
	FaLinkedin,
	FaInstagram,
	FaFacebookSquare,
} from 'react-icons/fa';

const Contact = () => {
	return (
		<ContactWrapper>
			<div className="header">
				<h1>Contact Me</h1>
				<p>
					Hi there, you can reach me by follow my social media account or email
					me at mekelilyasa@live.com. I am quite active at Facebook and
					Instagram, feel free to leave me a message or ask me some question
					about science or tech :)
				</p>
			</div>
			<div className="icons">
				<a
					href="https://github.com/retr00exe"
					aria-label="Github"
					target="_blank"
					rel="noopener"
				>
					<FaGithub className="icon github" />
				</a>
				<a
					href="https://stackoverflow.com/users/11771377/mekel-ilyasa"
					aria-label="Stackoverflow"
					target="_blank"
					rel="noopener"
				>
					<FaStackOverflow className="icon stackoverflow" />
				</a>
				<a
					href="https://www.hackerrank.com/mekelilyasa3"
					aria-label="Hackerrank"
					target="_blank"
					rel="noopener"
				>
					<FaHackerrank className="icon hackerrank" />
				</a>
				<a
					href="https://www.linkedin.com/in/mekelilyasa/"
					aria-label="Linkedin"
					target="_blank"
					rel="noopener"
				>
					<FaLinkedin className="icon linkedin" />
				</a>
				<a
					href="https://www.instagram.com/mekelilyasa/"
					aria-label="Instagram"
					target="_blank"
					rel="noopener"
				>
					<FaInstagram className="icon instagram" />
				</a>
				<a
					href="https://www.facebook.com/mekel.ilyasa/"
					aria-label="Facebook"
					target="_blank"
					rel="noopener"
				>
					<FaFacebookSquare className="icon facebook" />
				</a>
			</div>
		</ContactWrapper>
	);
};

const ContactWrapper = styled.div`
	height: 100vh;
	padding: 4rem 2rem;
	background-color: rgba(243, 244, 246, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	.header {
		max-width: 600px;
		margin: 4rem 0;
		p {
			font-size: 1.25rem;
		}
		@media (max-width: 1024px) {
			p {
				font-size: 1rem;
			}
		}
	}
	.github {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #14191e;
		}
	}
	.stackoverflow {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #f48024;
		}
	}
	.hackerrank {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #29b85d;
		}
	}
	.linkedin {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #0077b7;
		}
	}
	.instagram {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #c21a73;
		}
	}
	.facebook {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #465993;
		}
	}
`;

export default Contact;
