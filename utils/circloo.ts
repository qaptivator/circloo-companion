//import axios from 'axios'
import { useToast } from 'primevue/usetoast'
import type { AxiosInstance } from 'axios'
import { useNuxtApp } from '#app'

function useAxios(): AxiosInstance {
	const { $axios } = useNuxtApp()
	const axios = $axios as AxiosInstance
	/*axios.interceptors.response.use(
		(response) => response,
		(error) => {
			// aborted using AbortController
			if (error.code === 'ERR_CANCELED') return Promise.resolve({ status: 499 })
			return Promise.reject(error)
		}
	)*/
	return axios
}

//const BASE_URL = 'https://circloo-api-vercel.vercel.app/api/'
export const LATEST_VERSION = 9
export const NO_DOWNLOAD_TAG = '-nodwl'
const DEVICE_ID = '0'

// (argument0 == "Unmodded" ? "latest" : argument0)
export enum SortMode {
	Latest = 'latest',
	Search = 'search',
	Yours = 'yours',
}

// (argument0 == "yours" ? "all" : (argument0 == "Unmodded" ? "modQueue" : "modded"))
// you should almost always use "modded" instead of "all"
export enum Spec {
	All = 'all',
	ModQueue = 'modQueue',
	Modded = 'modded',
}

export enum ModerationStatus {
	Unmodded = 'unmodded', // 0
	Modded = 'modded', // 1
	Unknown = 'unknown',
}

// these two fields are required for almost every request, or the request fails
function _getBasicPayload() {
	return {
		version: LATEST_VERSION,
		deviceID: DEVICE_ID,
	}
}

async function _postRequest<T>(
	endpoint: string,
	payload: any,
	ignoreLevel: boolean = false,
	signal?: AbortSignal
): Promise<T> {
	try {
		const axios = useAxios()
		//const response = await axios.post(BASE_URL + endpoint, payload)
		const response = await axios({
			method: 'POST',
			url: endpoint,
			//url: BASE_URL + endpoint,
			signal,
			params: payload, // im such a dumb dumb, i should use params instead of data (body)!
			// dumb dumb axios converted my ?levels= to ?level= because of some funny serialization shenanigans
			paramsSerializer: (v) => {
				if (v.level && !v.levels && !ignoreLevel) {
					v.levels = v.level
					v.level = undefined
				}
				return new URLSearchParams(v).toString()
			},
		})
		return response.data as T
	} catch (error) {
		throw error
		//console.error('_postRequest ERROR: ', error)
		/*const toast = useToast()
		toast.add({
			severity: 'error',
			summary: 'HTTP request failed. See the console for more information',
			detail: 'Contact the developer so that they will fix the issue.',
			life: 3000,
		})*/
		//throw error
	}
}

/* --------- Level --------- */

export type LevelId = string

// i could probably make this as a class instead of an object...
export type Level = {
	id: LevelId
	name: string
	description: string
	walkthroughLink: string // link to the level's walkthrough
	creator: string
	content: string // levelcode (i aint parsing levelcode in here its too complicated bruh)
	imageURI: Blob // the level's thumbnail (should be transfored into a blob)
	creationTime: Date // standart timestamp
	color: number // the color of the level in HSV (the first parameter of it, as seen in the editor)
	//color: Vector3 // unfortunately i cant turn an rgb value into the first component of hsv, so its gonna remain like this for now
	totalPlayTime: number // total playtime of the level in seconds(?)
	totalPlayTimePeople: number // amount of people who played the level (the number of logs in totalPlayTime)
	// this is used to calculate the average duration, as so: totalPlayTime / totalPlayTimePeople

	bestScore: number // world record on the level
	featured: boolean
	plays: number // amount of unique people who completed the level
	starts: number // amount of people who started the level (not necesarilly finished it)
	totalCompletions: number // amount of completions (people who completed the level, not necesarilly unique)
	stars: number // amount of stars, upvotes internally
	moderationStatus: ModerationStatus

	version: number | undefined // unknown purpose
	bestScoreLog: any | undefined // unknown purpose
	deviceID: string | undefined // unknown purpose
	additionalInfo: any | undefined // unknown purpose
}

export function calculateAverageDuration(level: Level): number {
	return level.totalPlayTime / level.totalPlayTimePeople
}

/*
i found out how circloo makes the colors for levels yippiee
```py
def make_color_palette(hue):
    c_black = (0, 0, 0)
    c_gray = (128, 128, 128)
    col = hsv_to_rgb(hue, 210, 255) # 0 to 255
    back_col = merge_colors(col, c_gray, 0.3) # backgrond
    main_col = merge_colors(back_col, c_black, 0.6) # solid objects, the void around the level
    plr_col = merge_colors(main_col, c_black, 0.2) # player
    return (back_col, main_col, plr_col)
```
*/

// can be XYZ, RGB, HSV etc
export type Vector3 = {
	x: number
	y: number
	z: number
}

export function hsvToRgb(hsv: Vector3): Vector3 {
	const h = (hsv.x / 255) * 360
	const s = hsv.y / 255
	const v = hsv.z / 255

	let r = 0,
		g = 0,
		b = 0

	const i = Math.floor(h / 60)
	const f = h / 60 - i
	const p = v * (1 - s)
	const q = v * (1 - f * s)
	const t = v * (1 - (1 - f) * s)

	switch (i % 6) {
		case 0:
			;(r = v), (g = t), (b = p)
			break
		case 1:
			;(r = q), (g = v), (b = p)
			break
		case 2:
			;(r = p), (g = v), (b = t)
			break
		case 3:
			;(r = p), (g = q), (b = v)
			break
		case 4:
			;(r = t), (g = p), (b = v)
			break
		case 5:
			;(r = v), (g = p), (b = q)
			break
	}

	return {
		x: Math.round(r * 255),
		y: Math.round(g * 255),
		z: Math.round(b * 255),
	}
}

/* this code also sucks
export function hsvToRgb(hsv: Vector3): Vector3 {
	const { x: h, y: s, z: v } = hsv
	let r = 0,
		g = 0,
		b = 0

	const i = Math.floor(h * 6)
	const f = h * 6 - i
	const p = v * (1 - s)
	const q = v * (1 - f * s)
	const t = v * (1 - (1 - f) * s)

	switch (i % 6) {
		case 0:
			;(r = v), (g = t), (b = p)
			break
		case 1:
			;(r = q), (g = v), (b = p)
			break
		case 2:
			;(r = p), (g = v), (b = t)
			break
		case 3:
			;(r = p), (g = q), (b = v)
			break
		case 4:
			;(r = t), (g = p), (b = v)
			break
		case 5:
			;(r = v), (g = p), (b = q)
			break
	}

	console.log('hsv', hsv, 'rgb', r, g, b)

	return {
		x: Math.round(r * 255),
		y: Math.round(g * 255),
		z: Math.round(b * 255),
	}
}*/

/* this code sucks (made by chatgpt)
export function hsvToRgb(arg: Vector3): Vector3 {
	let [r, g, b] = [0, 0, 0]
	let [h, s, v] = [arg.x, arg.y, arg.z]

	let i = Math.floor(h * 6)
	let f = h * 6 - i
	let p = v * (1 - s)
	let q = v * (1 - f * s)
	let t = v * (1 - (1 - f) * s)

	switch (i % 6) {
		case 0:
			;(r = v), (g = t), (b = p)
			break
		case 1:
			;(r = q), (g = v), (b = p)
			break
		case 2:
			;(r = p), (g = v), (b = t)
			break
		case 3:
			;(r = p), (g = q), (b = v)
			break
		case 4:
			;(r = t), (g = p), (b = v)
			break
		case 5:
			;(r = v), (g = p), (b = q)
			break
	}

	return {
		x: Math.round(r * 255),
		y: Math.round(g * 255),
		z: Math.round(b * 255),
	}
}*/

export function rgbToHsv(arg: Vector3): Vector3 {
	let [r, g, b] = [arg.x / 255, arg.y / 255, arg.z / 255]
	let max = Math.max(r, g, b)
	let min = Math.min(r, g, b)
	let h = max
	let s = max
	let v = max

	let d = max - min
	s = max === 0 ? 0 : d / max

	if (max === min) {
		h = 0 // achromatic
	} else {
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0)
				break
			case g:
				h = (b - r) / d + 2
				break
			case b:
				h = (r - g) / d + 4
				break
		}
		h /= 6
	}

	return {
		x: h,
		y: s,
		z: v,
	}
}

export function blendColors(
	colorA: Vector3,
	colorB: Vector3,
	ratio: number
): Vector3 {
	let r = Math.round(colorA.x * (1 - ratio) + colorB.x * ratio)
	let g = Math.round(colorA.y * (1 - ratio) + colorB.y * ratio)
	let b = Math.round(colorA.z * (1 - ratio) + colorB.z * ratio)

	return {
		x: r,
		y: g,
		z: b,
	}
}

export type LevelColorPalette = {
	background: Vector3
	main: Vector3
	player: Vector3
}

export function getColorPaletteRaw(hue: number): LevelColorPalette {
	const c_black = { x: 0, y: 0, z: 0 }
	const c_gray = { x: 128, y: 128, z: 128 }

	const col = hsvToRgb({
		x: hue,
		y: 210,
		z: 255,
	})
	const back_col = blendColors(col, c_gray, 0.3)
	const main_col = blendColors(back_col, c_black, 0.6)
	const plr_col = blendColors(main_col, c_black, 0.2)

	return {
		background: back_col,
		main: main_col,
		player: plr_col,
	}
}

export function getColorPalette(level: Level): LevelColorPalette {
	return getColorPaletteRaw(level.color)
}

export function unblendColors(
	blendedColor: Vector3,
	colorB: Vector3,
	ratio: number
): Vector3 {
	if (ratio === 1) {
		throw new Error(
			'Cannot unblend if ratio is 1 (blended color is purely colorB)'
		)
	}

	const unblendedRatio = 1 - ratio
	const r = (blendedColor.x - colorB.x * ratio) / unblendedRatio
	const g = (blendedColor.y - colorB.y * ratio) / unblendedRatio
	const b = (blendedColor.z - colorB.z * ratio) / unblendedRatio

	return {
		x: Math.max(0, Math.min(255, Math.round(r))),
		y: Math.max(0, Math.min(255, Math.round(g))),
		z: Math.max(0, Math.min(255, Math.round(b))),
	}
}

export function getHueFromBackgroundColor(backgroundColor: Vector3): number {
	const c_gray = { x: 128, y: 128, z: 128 }
	const col = unblendColors(backgroundColor, c_gray, 0.3)
	const hsvCol = rgbToHsv(col)
	return Math.round(hsvCol.x * 255)
}

const _ZERO: Vector3 = {
	x: 0,
	y: 0,
	z: 0,
}
export const ZeroColorPalette: LevelColorPalette = {
	background: _ZERO,
	main: _ZERO,
	player: _ZERO,
}

// this is what comes from the api
type _RawLevel = {
	id: LevelId
	name: string
	description: string
	walkthroughLink: string // link to the level's walkthrough
	creator: string
	content: string // levelcode
	imageURI: string // the level's thumbnail (raw image uri)
	creationTime: string // standart timestamp
	color: number // the color of the level
	totalPlayTime: number // total playtime of the level in seconds(?)
	totalPlayTimePeople: number // amount of people who played the level (the number of logs in totalPlayTime)
	// this is used to calculate the average duration, as so: totalPlayTime / totalPlayTimePeople

	bestScore: number // world record on the level
	featured: boolean
	plays: number // amount of unique people who completed the level
	starts: number // amount of people who started the level (not necesarilly finished it)
	totalCompletions: number // amount of completions (people who completed the level, not necesarilly unique)
	upvotes: number // amount of stars, upvotes internally
	moderationStatus: string

	version: number | undefined // unknown purpose
	bestScoreLog: any | undefined // unknown purpose
	deviceID: string | undefined // unknown purpose
	additionalInfo: any | undefined // unknown purpose
}

async function _sanitizeLevel(rawLevel: _RawLevel): Promise<Level> {
	function _numberToHexString(num: number): string {
		return num.toString(16).padStart(2, '0')
	}

	function _colorFromRawLevel() {
		const hex = _numberToHexString(rawLevel.color)
		//console.log('_sanitizeLevel hex', hex, rawLevel.color)
		const r = parseInt(hex.slice(0, 2), 16)
		const g = parseInt(hex.slice(2, 4), 16)
		const b = parseInt(hex.slice(4, 6), 16)
		/*const newColor = {
			x: r,
			y: g,
			z: b,
		}*/
		// to do fix this temporary solution
		//return r
		// FIXED IT! (it took such a while to find this lol)

		return getHueFromBackgroundColor({
			x: r,
			y: g,
			z: b,
		})
	}

	// https://stackoverflow.com/questions/12168909/blob-from-dataurl
	const realImageURI = `data:image/png;base64,${rawLevel.imageURI.slice(7)}`
	const imageBlob = await fetch(realImageURI).then((res) => res.blob())

	let newColor = 0
	const colorsIndex = rawLevel.content.indexOf('COLORS')
	/*if (rawLevel.id === 'db2a0e27-7836-4219-acbe-c83a0c80f4f5') {
		console.log(
			'SPECIAL colorsIndex:',
			colorsIndex,
			rawLevel.color,
			rawLevel.content
		)
		// NEW ISSUE: just for this level, the level content is set to "please-request" instead, so i cannot find the COLORS tag. but when i go to the level page, it works fine. really weird.
	}*/
	//console.log('colorsIndex', colorsIndex)
	if (colorsIndex === -1) {
		newColor = _colorFromRawLevel()
	} else {
		//colorsIndex + 7
		const colorChars = []
		for (let i = colorsIndex + 7; i < rawLevel.content.length; i++) {
			const char = rawLevel.content[i]
			if (isNaN(Number(char))) {
				break
			}
			colorChars.push(char)
		}
		newColor = parseInt(colorChars.join(''), 10)
	}

	let newModerationStatus = ModerationStatus.Unknown
	if (parseInt(rawLevel.moderationStatus) === 0) {
		newModerationStatus = ModerationStatus.Unmodded
	} else if (parseInt(rawLevel.moderationStatus) === 1) {
		newModerationStatus = ModerationStatus.Modded
	}

	// TODO: make this actually be enforced in the backend
	if (
		rawLevel?.description &&
		rawLevel?.description.includes(NO_DOWNLOAD_TAG)
	) {
		rawLevel.content = ''
	}

	return {
		id: rawLevel.id,
		name: rawLevel.name,
		description: rawLevel.description,
		walkthroughLink: rawLevel.walkthroughLink,
		creator: rawLevel.creator,
		content: rawLevel.content,
		imageURI: imageBlob,
		creationTime: new Date(rawLevel.creationTime),
		color: newColor, //rawLevel.color,
		totalPlayTime: rawLevel.totalPlayTime,
		totalPlayTimePeople: rawLevel.totalPlayTimePeople,
		bestScore: rawLevel.bestScore,
		featured: rawLevel.featured,
		plays: rawLevel.plays,
		starts: rawLevel.starts,
		totalCompletions: rawLevel.totalCompletions,
		stars: rawLevel.upvotes, // it is UPVOTES i am so dumb
		moderationStatus: newModerationStatus,
		/*ModerationStatus[
				rawLevel.moderationStatus as keyof typeof ModerationStatus
			],*/
		version: rawLevel.version,
		bestScoreLog: rawLevel.bestScoreLog,
		deviceID: rawLevel.deviceID,
		additionalInfo: rawLevel.additionalInfo,
	}
}

/* --------- GetLevels --------- */

export type GetLevelsPayload = {
	sortMode: SortMode
	page: number
	itemsPerPage: number
	spec: Spec
	query: string
	version: number
	deviceID: string
	supportsCollections: number | undefined
	cachedLevels: any | undefined
	pagingInfo: any | undefined
}

export type GetLevelsRawResponse = {
	levels: _RawLevel[]
}

export type GetLevelsResponse = Level[]

async function _sanitizeLevels(response: GetLevelsRawResponse) {
	if (
		!response ||
		!response.levels ||
		!Array.isArray(response.levels) ||
		response.levels.length === 0
	)
		return []
	let sanitized = []
	// rookie mistake: using "in" over "of"
	for (const rawLevel of response.levels) {
		sanitized.push(await _sanitizeLevel(rawLevel))
	}
	return sanitized
}

/**
 * @param sortMode sort mode
 * @param pageNumber the page number
 * @param itemsPerPage how many levels to show per page
 * @param spec level type in the mod queue?
 * @param searchQuery search query
 */
async function _getLevelsRaw(
	sortMode: SortMode,
	pageNumber: number,
	itemsPerPage: number,
	spec: Spec,
	searchQuery: string,
	signal?: AbortSignal
): Promise<GetLevelsRawResponse> {
	const payload: GetLevelsPayload = {
		sortMode: sortMode,
		page: pageNumber,
		itemsPerPage: itemsPerPage,
		spec: spec,
		query: searchQuery,
		supportsCollections: 2, // 2 by default
		cachedLevels: null,
		pagingInfo: null,
		version: LATEST_VERSION,
		deviceID: DEVICE_ID,
	}

	//console.log('_getLevelsRaw payload:', payload)

	const response = await _postRequest<GetLevelsRawResponse>(
		'GetLevels',
		payload,
		false,
		signal
	)

	//return await _sanitizeLevels(response)
	return response
}

/**
 * @param sortMode sort mode
 * @param pageNumber the page number
 * @param itemsPerPage how many levels to show per page
 * @param spec level type in the mod queue?
 * @param searchQuery search query
 */
export async function getLevels(
	sortMode: SortMode,
	pageNumber: number,
	itemsPerPage: number,
	spec: Spec,
	searchQuery: string,
	signal?: AbortSignal
): Promise<GetLevelsResponse> {
	return await _sanitizeLevels(
		await _getLevelsRaw(
			sortMode,
			pageNumber,
			itemsPerPage,
			spec,
			searchQuery,
			signal
		)
	)
}

/**
 * @param pageNumber the page number
 * @param itemsPerPage how many levels to show per page
 */
export async function getYourLevels(
	pageNumber: number = 0,
	itemsPerPage: number = 10
): Promise<GetLevelsResponse> {
	return await _sanitizeLevels(
		await _getLevelsRaw(SortMode.Yours, pageNumber, itemsPerPage, Spec.All, '')
	)
}

/**
 * @param creatorName the name of the level creator
 * @param pageNumber the page number
 * @param itemsPerPage how many levels to show per page
 */
export async function getLevelsByCreator(
	creatorName: string,
	pageNumber: number,
	itemsPerPage: number
): Promise<GetLevelsResponse> {
	return await _sanitizeLevels(
		await _getLevelsRaw(
			SortMode.Search,
			pageNumber,
			itemsPerPage,
			Spec.Modded,
			`Levels by ${creatorName}`
		)
	)
}

/* --------- GetDiscoverLevels --------- */

export type GetDiscoverLevelsPayload = GetLevelsPayload

// there is also the "GetLevelsDaily" endpoint, but i have no idea what levels does it show
// i cant find those levels in the game in any of the game menus

/**
 * @param pageNumber the page number (dailys from n days ago, 0 are the current daily levels)
 * @param itemsPerPage how many levels to show per page
 */
export async function getDailyLevels(
	pageNumber: number = 0,
	itemsPerPage: number = 10
): Promise<GetLevelsResponse> {
	const payload: GetDiscoverLevelsPayload = {
		sortMode: SortMode.Latest,
		page: pageNumber,
		itemsPerPage: itemsPerPage,
		spec: Spec.Modded,
		query: '',
		supportsCollections: 2, // 2 by default
		cachedLevels: null,
		pagingInfo: null,
		version: LATEST_VERSION,
		deviceID: DEVICE_ID,
	}

	const response = await _postRequest<GetLevelsRawResponse>(
		'GetDiscoverLevels',
		payload
	)

	return await _sanitizeLevels(response)
	//return response
}

/* --------- GetLevelsById --------- */

export type GetLevelsByIdPayload = {
	levels: string
	deviceID: string
}

/**
 * @param levelIDs array of level ids strings
 */
export async function getLevelsById(
	levelIds: LevelId[]
): Promise<GetLevelsResponse> {
	const payload: GetLevelsByIdPayload = {
		levels: levelIds.join(','),
		deviceID: DEVICE_ID,
		//version: LATEST_VERSION, // its not needed here wow
	}

	const response = await _postRequest<GetLevelsRawResponse>(
		'GetLevelsById',
		payload
	)

	return await _sanitizeLevels(response)
}

/* --------- GetLevelAdvancedInfo --------- */

export type AdvancedLevelInfo = {
	id: LevelId
	creatorDescription: string
	creatorPersonalURL: string
	leaderboard: Array<{
		score: number
		name: string
		isYou: boolean
	}>
}

export type GetLevelAdvancedInfoPayload = {
	level: string
	deviceID: string
}

/**
 * @param levelIDs array of level ids strings
 */
export async function getLevelAdvancedInfo(
	levelId: LevelId
): Promise<AdvancedLevelInfo> {
	const payload: GetLevelAdvancedInfoPayload = {
		level: levelId,
		deviceID: DEVICE_ID,
		//version: LATEST_VERSION,
	}

	const response = await _postRequest<AdvancedLevelInfo>(
		'GetLevelAdvancedInfo',
		payload,
		true
	)

	return response
}

export function formatScore(score: number) {
	const seconds = score / 60
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = Math.floor(seconds % 60)
	const milliseconds = Math.floor((seconds % 1) * 100)
	const formattedScore = `${minutes}:${remainingSeconds
		.toString()
		.padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`
	return formattedScore
}

/* --------- Level Metadata (my own data stored specifically for this website) --------- */

const LEVEL_METADATA_LS_NAME = 'level_metadata'

export type LevelMetadata = {
	id: LevelId
	bookmarked: boolean
}

export function getLevelMetadata(level: Level): LevelMetadata {
	const DEFAULT_METADATA = {
		id: level.id,
		bookmarked: false,
	}

	const metadatas: LevelMetadata[] = JSON.parse(
		localStorage.getItem(LEVEL_METADATA_LS_NAME) || '{}'
	)
	if (metadatas && metadatas.length > 0) {
		const metadata = metadatas.find((v) => v.id === level.id)
		return metadata || DEFAULT_METADATA
	} else {
		return DEFAULT_METADATA
	}
}

export function setLevelMetadata(level: Level, metadata: LevelMetadata) {
	const metadatas: LevelMetadata[] = JSON.parse(
		localStorage.getItem(LEVEL_METADATA_LS_NAME) || '[]'
	)

	const existingIndex = metadatas.findIndex((v) => v.id === level.id)
	if (existingIndex !== -1) {
		metadatas[existingIndex] = Object.assign(metadatas[existingIndex], metadata)
	} else {
		metadatas.push(metadata)
	}

	localStorage.setItem(LEVEL_METADATA_LS_NAME, JSON.stringify(metadatas))
}

export function getAllLevelMetadata(): LevelMetadata[] {
	return JSON.parse(localStorage.getItem(LEVEL_METADATA_LS_NAME) || '[]')
}
