import { sliceText } from '../utils/card';

const Cards = ({ post }) => {
	console.log(post);
	return (
		<div className="px-8 py-4">
			<div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto shadow-sm">
				<img
					src={post.cover.url}
					alt=""
					className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none"
					style={{ objectFit: 'cover' }}
				/>
				<div className="bg-white p-6 rounded-bl-md rounded-br-md flex flex-col justify-between lg:rounded-bl-none lg:rounded-tr-md">
					<div>
						<h2 className="text-gray-700 font-semibold text-xl">
							{post.title}
						</h2>
						<p className="text-sm text-gray-600 mt-4">
							{sliceText(post.content, 120)}
						</p>
					</div>
					<div className="flex items-center mt-4">
						<div className="flex items-center">
							<img
								src="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4"
								alt=""
								className="h-10 w-10 rounded-full"
							/>
							<div className="ml-4">
								<p className="text-gray-800 text-sm font-semibold">
									Mekel Ilyasa
								</p>
								<p className="text-gray-600 text-sm">28 Jun 2020</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
