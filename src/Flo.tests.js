'use strict'

const expect = require('chai').expect

const FLO = require('./Flo')

const configFLO = require('./configFLO')
const configProtocol = require('./configProtocol')
const configMarket = require('./configMarket')

describe('FLO', function() {
	describe('gets', function() {
		const flo = new FLO(configFLO.params, configProtocol.params, configMarket.params)
		it('getBlockTime should ', function() {
			expect(flo.getBlockTime()).eql(configFLO.params.blockTime)
		})
		it('getDifficulty should ', function() {
			expect(flo.getDifficulty()).eql(configFLO.params.difficulty)
		})
		it('getBlockReward should ', function() {
			expect(flo.getBlockReward()).eql(configFLO.params.blockReward)
		})
	})
	describe('sets', function() {
		const flo = new FLO(configFLO.params, configProtocol.params, configMarket.params)
		it('setBlockTime should ', function() {
			const expected = 10000
			flo.setBlockTime(expected)
			expect(flo.getBlockTime()).eql(expected)
		})
		it('setDifficulty should ', function() {
			const expected = 10000
			flo.setDifficulty(expected)
			expect(flo.getDifficulty()).eql(expected)
		})
		it('setBlockReward should ', function() {
			const expected = 10000
			flo.setBlockReward(expected)
			expect(flo.getBlockReward()).eql(expected)
		})
	})
})
