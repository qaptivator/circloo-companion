export function useNetworkStatus() {
	const isOnline = ref(true)

	const updateStatus = () => {
		isOnline.value = navigator.onLine
	}

	onMounted(() => {
		isOnline.value = navigator.onLine
		window.addEventListener('online', updateStatus)
		window.addEventListener('offline', updateStatus)
	})

	onUnmounted(() => {
		window.removeEventListener('online', updateStatus)
		window.removeEventListener('offline', updateStatus)
	})

	return { isOnline }
}
