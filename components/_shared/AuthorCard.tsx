import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formatDate } from '@core/utils/date';

interface Props {
	name: string;
	image: string;
	date: Date;
	readtime: string;
}

const AuthorCard: React.FC<Props> = ({
	name,
	image,
	date,
	readtime,
}: Props): JSX.Element => {
	return (
		<AuthorCardWrapper>
			<div className="content-header">
				<Image
					src={image}
					alt={name}
					width={50}
					height={50}
					className="profile-image"
				/>
				<div className="content-profile">
					<p id="author">{name}</p>
					<p id="date">{formatDate(date)}</p>
				</div>
			</div>
			<div className="readtime">
				<p>{readtime}</p>
			</div>
		</AuthorCardWrapper>
	);
};

const AuthorCardWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.content-header {
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
`;

export default AuthorCard;
