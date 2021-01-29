import React, { Component } from 'react';
import styled from 'styled-components';
import Terminal from 'terminal-in-react';
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin';
import ViPlugin from 'terminal-in-react-vi-plugin';

const FileSystemPlugin = pseudoFileSystemPlugin();

class AboutContent extends Component {
	about = () =>
		"Hi there! I'm Mekel Ilyasa. A computer nerd who love to learn all things xD";
	education = () =>
		"I'm currently pursuing my bachelor degree at Computer Engineering Departement, Diponegoro University. I know, majoring 'IT' at college sucks af but I try my best to survive with old school tech stack at college LOL. I code using PHP too at college even I hate it :)";
	skills = () =>
		'My main skills are Python & Javascript, but sometimes I also code using low level language too like C, C++ & assembly to tinkering my hardware. Javascript + Python = ✨. Btw you can visit my github to see all my works and my favorite tech stack ;)';

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
							type: (args, print, runCommand) => {
								const text = args.slice(1).join(' ');
								print('');
								for (let i = 0; i < text.length; i += 1) {
									setTimeout(() => {
										runCommand(`edit-line ${text.slice(0, i + 1)}`);
									}, 100 * i);
								}
							},
						}}
						msg="Welcome to about page - Type 'help' to list all supported commands :)"
						closedTitle=""
						closedMessage="Click on the icon to reopen"
						plugins={[
							FileSystemPlugin,
							{
								class: ViPlugin,
								config: {
									filesystem: FileSystemPlugin.displayName,
								},
							},
						]}
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
	@media (min-width: 1024px) {
	}
`;

export default AboutContent;
