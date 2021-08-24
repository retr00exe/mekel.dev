import React, { Component } from 'react';
import styled from 'styled-components';
import Terminal from 'terminal-in-react';

class AboutContent extends Component {
	about = () =>
		"Hi there! I'm Mekel Ilyasa. A computer nerd who loves to learn all things from frontend into backend xD. I'm a programmer, I have no life, I spend almost all my entire time in front of my computer LMAO. I do programming not because want expect to get paid or get adulation by the public, but because it is fun to program, yup I follow one of the quotes from Linus Torvalds 👀 There's no fancy animation or design in this blog, I make this blog simple and lightweight as possible to boost the performance 👻";
	education = () =>
		"I'm currently pursuing my bachelor's degree at Computer Engineering Department, Diponegoro University. I know, majoring 'tech' at college sucks but I try my best to survive with old school tech stack at college LOL. I code using PHP and Java too at college even though I hate it 🐳";
	skills = () =>
		'My main skills are Python & Javascript, but sometimes I also tinkering with low level languages like C, C++ & assembly too. My fav tech stack is MERN (MongoDB, Express, React, Node.js) stack. You can visit my GitHub to see all my works and my favorite tech stack. Right now I still exploring an adventure to learn Go programming language to build robust backend services and learn SSR stuff using Next.js 🐙';

	render() {
		return (
			<AboutWrapper>
				<div className="container">
					<Terminal
						color="white"
						backgroundColor="#172A45"
						prompt="white"
						descriptions={{
							about: 'about me',
							education: 'my current education',
							skills: 'my skills',
							type: 'type some text',
							show: 'show welcome message',
						}}
						style={{ fontSize: '1rem' }}
						commands={{
							about: this.about,
							education: this.education,
							skills: this.skills,
						}}
						msg="Hi! Welcome to about page - Type 'help' to list all supported commands"
						closedTitle=""
						closedMessage="Click on the icon to reopen"
					/>
				</div>
			</AboutWrapper>
		);
	}
}

const AboutWrapper = styled.div`
	height: 100vh;
	transition-duration: 0.6s;
	transition-timing-function: ease;
	.container {
		padding: 4rem 0 6rem 0;
		margin: 4rem 0 2rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default AboutContent;
