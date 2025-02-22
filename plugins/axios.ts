import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { defineNuxtPlugin } from '#app'
import { AxiosThrottler } from 'axios-throttler'

const BASE_URL = 'https://circloo-api-vercel.vercel.app/api/'

export default defineNuxtPlugin((nuxtApp) => {
	const client: AxiosInstance = axios.create({
		baseURL: BASE_URL,
		//timeout: 5000,
		//headers: {
		//  'Content-Type': 'application/json',
		//},
	})
	AxiosThrottler.throttle(client, AxiosThrottler.rps(1))

	/*return {
		provide: {
			axios: client,
		},
	}*/
	nuxtApp.provide('axios', client)
})
