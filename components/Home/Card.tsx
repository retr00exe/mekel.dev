import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import readingTime from 'reading-time';
import AuthorCard from '@components/_shared/AuthorCard';
import { sliceText } from '@core/utils/slice';

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
		<div className="mx-auto max-w-[900px] py-4 px-8">
			<div className="mx-auto rounded-xl overflow-hidden md:flex md:col">
				<Image
					src={post.cover.url}
					alt="Card Image"
					width={500}
					height={400}
					className="cover-image"
				/>
				<div className="bg-[#ffffffcc] -mt-4 p-6 flex-bc col duration-[600ms] ease">
					<div>
						<Link href={`/posts/${encodeURIComponent(post.slug)}`}>
							<h2 className="font-semibold text-xl hover:[#e200e2] hover:cursor-pointer">
								{post.title}
							</h2>
						</Link>
						<p className="mt-4 text-sm text-[#4b5563]">{sliceText(post.content, 120)}</p>
					</div>
					<div className="flex-bc col">
						<AuthorCard
							name="Mekel Ilyasa"
							image="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4"
							date={post.date}
							readtime={stats.text}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
