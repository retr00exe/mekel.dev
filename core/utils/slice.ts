export const sliceText = (text: string, end: number): string => {
	if (!text) {
		return '';
	} else {
		return text.slice(0, end) + (text.length > end ? '...' : '');
	}
};
