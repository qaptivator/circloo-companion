import { describe, it, expect } from 'vitest'
import * as global from '../utils/global'

describe('roundDecimalPlace', () => {
	it('rounds a number correctly', () => {
		expect(global.roundDecimalPlace(12.7481, 1)).toBe(12.7)
		expect(global.roundDecimalPlace(12.7581, 1)).toBe(12.8)
		expect(global.roundDecimalPlace(12.7481, 2)).toBe(12.75)
		expect(global.roundDecimalPlace(12.7581, 2)).toBe(12.76)
	})

	it('handle zero place', () => {
		expect(global.roundDecimalPlace(12.7481, 0)).toBe(13)
		expect(global.roundDecimalPlace(12.4581, 0)).toBe(12)
	})

	it('handle negative places', () => {
		expect(global.roundDecimalPlace(12.7481, -1)).toBe(10)
		expect(global.roundDecimalPlace(972.2, -2)).toBe(1000)
	})
})
