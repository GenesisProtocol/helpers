const { getAddress } = require('./addresses')
const { getABI } = require('./abis')

const getChain = async () => (await ethers.provider.getNetwork()).chainId

const getContract = async ({ name }) => new ethers.Contract(
	await getAddress({
		chain: await getChain(),
		name,
	}),
	await getABI({ name }),
	(await ethers.getSigners())[0]
)

module.exports = {
	getChain,
	getContract,
}