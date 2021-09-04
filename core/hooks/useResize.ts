import { useState, useEffect } from 'react';

interface Screen {
	width: number;
	height: number;
}

const debounce = (callback, waitTime) => {
	let timeNow = Date.now();
	return () => {
		if (timeNow - Date.now() + waitTime < 0) {
			callback();
			timeNow = Date.now();
		}
	};
};

const getScreenSize = () => {
	return {
		width: window.innerWidth,
		height: window.innerHeight,
	};
};

const useResize = (): Screen => {
	const [screenSize, setScreenSize] = useState<Screen>({
		width: 0,
		height: 0,
	});
	const handleSetWidth = () => setScreenSize(getScreenSize());
	useEffect(() => {
		handleSetWidth();
		const handler = debounce(handleSetWidth, 5);

		window.addEventListener('resize', handler);

		return () => {
			window.removeEventListener('resize', handler);
		};
	}, []);

	return screenSize;
};

export default useResize;
