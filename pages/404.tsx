import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
	return (
		<div className="flex-cc -md:col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<Link href="/">
				<img
					src="https://res.cloudinary.com/retr00exe/image/upload/v1613916236/404-crop_sm7axm.gif"
					className="cursor-pointer w-[40%] h-[40%] -md:w-full -md:h-full"
				/>
			</Link>
			<p className="text-lg -md:text-base">
				Error <b className="text-2xl -md:text-xl">404</b> not found, click the monitor to find way
				out.
			</p>
		</div>
	);
};

export default Custom404;
