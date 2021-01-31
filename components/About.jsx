import React, { Component } from 'react';
import styled from 'styled-components';
import Terminal from 'terminal-in-react';

class AboutContent extends Component {
	about = () =>
		"Hi there! I'm Mekel Ilyasa. A computer nerd who love to learn all things from frontend into backend & security xD. There's no fancy animation or design in this blog, I make this blog simple and lightweight as possible to boost the performance :)";
	education = () =>
		"I'm currently pursuing my bachelor degree at Computer Engineering Departement, Diponegoro University. I know, majoring 'IT' at college sucks af but I try my best to survive with old school tech stack at college LOL. I code using PHP too at college even I hate it.";
	skills = () =>
		"My main skills are Python & Javascript, but sometimes I also code using low level language like C, C++ & assembly too. You can visit my github to see all my works and my favorite tech stack. I don' code using PHP btw.";

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
						msg="Welcome to about page - Type 'help' to list all supported commands"
						closedTitle=""
						closedMessage="Click on the icon to reopen"
					/>
				</div>
			</AboutWrapper>
		);
	}
}

const AboutWrapper = styled.div`
	background-color: rgba(243, 244, 246, 1);
	.container {
		height: 100vh;
		padding: 4rem 0 6rem 0;
		margin: 4rem 0 2rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default AboutContent;
