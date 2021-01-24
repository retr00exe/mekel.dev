import React from 'react';

const Content = () => {
	return (
		<div className="px-8 py-4">
			<div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
				<img src="https://cdn.dribbble.com/users/708424/screenshots/7961575/media/5634c53a6642cfbba99d9aaa52d42443.png?compress=1&resize=1000x750" alt="" className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none" style={{objectFit: 'cover'}}/>
				<div className="bg-white p-6 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
					<h2 className="text-gray-700 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
					<p className="text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis laudantium est fugit?!</p>
					<div className="flex items-center mt-4">
						<div className="flex items-center">
							<img src="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4" alt="" className="h-10 w-10 rounded-full"/>
							<div className="ml-4">
								<p className="text-gray-800 text-sm font-semibold">Mekel Ilyasa</p>
								<p className="text-gray-600 text-sm">28 Jun 2020</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
