const { getAddress } = require('./addresses')
const { getABI } = require('./abis')

const getChain = async () => parseInt((await ethers.provider.getNetwork()).chainId)

const getBlock = () => ethers.provider.getBlock('latest')

const getContract = async ({ name }) => new ethers.Contract(
	await getAddress({ chain: await getChain(), name }),
	await getABI({ name }),
	await ethers.getSigner(process.env.DEPLOYER_ADDRESS),
)

const send = async (tx, wait = 2) => {
	tx = await tx

	const network = process?.env?.HARDHAT_NETWORK

	if (network !== 'hardhat' && network !== 'localhost')
		await tx.wait(wait)

	return tx
}

module.exports = {
	getChain,
	getContract,
	send,
	getBlock,
}