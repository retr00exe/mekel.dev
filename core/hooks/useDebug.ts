import { useEffect } from 'react';

const useDebug = (state: unknown): void => {
	useEffect(() => {
		console.log(state);
	}, [state]);
};

export default useDebug;
