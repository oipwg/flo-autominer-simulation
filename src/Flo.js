'use strict'

/**
 * Central class of the simulation. It puts together all the information needed to run a block and the engine to evaluate each round.
 *  @class
 * */
class Flo {
	/**
	 *Creates an instance of Flo.
	 * @param {Object} floParams - Object with the parameters related to the FLO network
	 * @param {Object} protocolParams
	 * @param {Object} marketParams
	 */
	constructor(floParams, protocolParams, marketParams) {
		this.params = {
			flo: floParams,
			protocol: protocolParams,
			market: marketParams
		}
		this.autoMiners = []
		this.pools = []
		this.miniRigRentals = []
		this.blockWinners = []
	}

	/**
	 * Get current difficulty
	 *
	 * @returns {number} - The current difficulty
	 */
	getDifficulty() {
		return this.params.flo.difficulty
	}

	/**
	 *Get current time target to generate a block
	 *
	 * @returns {number} - The current time target to generate a block
	 */
	getBlockTime() {
		return this.params.flo.blockTime
	}

	/**
	 *Get the current value of block reward
	 *
	 * @returns {number} - the current value of block reward
	 */
	getBlockReward() {
		return this.params.flo.blockReward
	}

	/**
	 * set new difficulty
	 *
	 * @param {number} newValue - The new difficulty
	 */
	setDifficulty(newValue) {
		this.params.flo.difficulty = newValue
	}

	/**
	 *set new time target to generate the block
	 *
	 * @param {number} newValue - The new time target to generate the block
	 */
	setBlockTime(newValue) {
		this.params.flo.blockTime = newValue
	}

	/**
	 *set new value for block reward
	 *
	 * @param {number} newValue - The new value for block reward
	 */
	setBlockReward(newValue) {
		this.params.flo.blockReward = newValue
	}
}

module.exports = Flo