import { useEffect, useRef, useState } from 'react';

type ReturnTuple = [
	number,
	React.MutableRefObject<HTMLElement>,
	React.MutableRefObject<HTMLElement>
];

const useClearance = (initial: number): ReturnTuple => {
	const [clearance, setClearance] = useState(initial);

	const HeaderRef = useRef<HTMLElement>(null);
	const FooterRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const offset =
			HeaderRef.current.offsetHeight + FooterRef.current.offsetHeight;
		setClearance(offset);
	}, [HeaderRef, FooterRef]);

	return [clearance, HeaderRef, FooterRef];
};

export default useClearance;
