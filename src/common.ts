export function getAsString(value: string | string[]) {
	if (Array.isArray(value)) {
		return value[0];
	}

	return value;
}

export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
});
