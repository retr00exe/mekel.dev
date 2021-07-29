import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import readingTime from 'reading-time';
import { sliceText } from '../utils/slice';
import { formatDate } from '../utils/date';

interface Props {
	post: {
		id: string;
		title: string;
		slug: string;
		content: string;
		cover: {
			url: string;
		};
		date?: Date;
	};
}

const Cards: React.FC<Props> = ({ post }: Props) => {
	const stats = readingTime(post.content);
	return (
		<CardWrapper>
			<div className="card-container">
				<Image
					src={post.cover.url}
					alt="Card Image"
					width={500}
					height={400}
					className="cover-image"
				/>
				<div className="card-content">
					<div className="content-header">
						<Link href={`/post/${encodeURIComponent(post.slug)}`}>
							<h2>{post.title}</h2>
						</Link>
						<p>{sliceText(post.content, 120)}</p>
					</div>
					<div className="footer">
						<div className="content-footer">
							<Image
								src="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4"
								alt="GitHub Profiles"
								width={50}
								height={50}
								className="profile-image"
							/>
							<div className="content-profile">
								<p id="author">Mekel Ilyasa</p>
								<p id="date">{formatDate(post.date)}</p>
							</div>
						</div>
						<div className="readtime">
							<p>{stats.text}</p>
						</div>
					</div>
				</div>
			</div>
		</CardWrapper>
	);
};

const CardWrapper = styled.div`
	margin: 0 auto;
	max-width: 900px;
	padding: 1rem 2rem;
	.card-cover-image {
		object-fit: cover;
		width: 426px;
		height: 240px;
		@media (max-width: 768px) {
			width: 350px;
			height: 260px;
		}
	}
	.card-container {
		margin: 0 auto;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		border-radius: 0.75rem;
		overflow: hidden;
		@media (min-width: 768px) {
			display: flex;
			flex-direction: row;
		}
		.card-content {
			background-color: var(--navColor);
			margin-top: -1rem;
			padding: 1.5rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			transition-duration: 0.6s;
			transition-timing-function: ease;
			.content-header {
				h2 {
					color: var(--colorSecondary);
					font-weight: 600;
					font-size: 1.25rem;
					line-height: 1.75rem;
					&:hover {
						color: #e200e2;
						cursor: pointer;
					}
				}
				p {
					margin-top: 1rem;
					color: var(--colorTertiary);
					font-size: 0.875rem;
					line-height: 1.25rem;
				}
			}
			.footer {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.content-footer {
					display: flex;
					align-items: center;
					.content-profile {
						margin-left: 1rem;
						#author {
							color: var(--colorPrimary);
							font-size: 0.875rem;
							line-height: 1.25rem;
							font-weight: 600;
							margin: 0;
						}
						#date {
							color: var(--colorTertiary);
							font-size: 0.875rem;
							line-height: 1.25rem;
							margin: 0;
						}
					}
				}
				.readtime {
					color: var(--colorQuarternary);
					text-transform: capitalize;
				}
			}
		}
	}
`;

export default Cards;
