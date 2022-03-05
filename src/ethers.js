const { getAddress } = require('./addresses')

const getChain = async () => (await ethers.provider.getNetwork()).chainId

const getContract = async ({ name }) => (await ethers.getContractFactory(name))
	.attach(await getAddress({
		chain: await getChain(),
		name,
	}))

module.exports = {
	getChain,
	getContract,
}