export function uuid() {
	return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
		(
			+c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
		).toString(16)
	)
}

export function downloadFile(file: string | Blob, filename: string) {
	const url: string = file instanceof Blob ? URL.createObjectURL(file) : file
	const a = document.createElement('a')
	a.href = url
	a.download = filename
	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)
	URL.revokeObjectURL(url)
}

export function roundDecimalPlace(value: number, place: number = 1) {
	const multiplier = 10 ** place
	return Math.round(value * multiplier) / multiplier
}
