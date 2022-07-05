import React from 'react';
import Image from 'next/image';
import { formatDate } from '@core/utils/date';

interface Props {
	name: string;
	image: string;
	date: Date;
	readtime: string;
}

const AuthorCard: React.FC<Props> = ({ name, image, date, readtime }: Props): JSX.Element => {
	return (
		<div className="w-full flex-bs">
			<div className="flex-cc">
				<Image src={image} alt={name} width={50} height={50} className="profile-image" />
				<div className="ml-4">
					<p className="text-[#1f2937] text-sm m-0 font-semibold">{name}</p>
					<p className="text-[#4b5563] text-sm m-0">{formatDate(date)}</p>
				</div>
			</div>
			<div className="capitalize text-[#707070]">
				<p>{readtime}</p>
			</div>
		</div>
	);
};

export default AuthorCard;
