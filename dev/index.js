const ethers = require('./ethers')
const addresses = require('./addresses')
const abis = require('./abis')

const save = async ({ name, address, abi }) => {
	const chain = await ethers.getChain()

	await Promise.all([
		addresses.saveAddress({
			chain,
			name,
			address,
		}),
		abis.saveABI({
			name,
			abi,
		}),
	])
}

module.exports = {
	save,
	...addresses,
	...ethers,
	...abis,
}