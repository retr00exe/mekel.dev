export const sliceText = (text: String, end: number) => {
	if (!text) {
		return '';
	} else {
		return text.slice(0, end) + (text.length > end ? '...' : '');
	}
};
