const fs = require('fs').promises
const path = require('path')
const Case = require('case')
const { setInfo, isChainSpecific } = require('./contract-info')

const ADDRESSES_FILE_PATH = path.join(__dirname, '../data/addresses.json')

const getAddresses = async () => JSON.parse((await fs.readFile(ADDRESSES_FILE_PATH)).toString())

const saveAddresses = async addresses => fs.writeFile(
	ADDRESSES_FILE_PATH,
	JSON.stringify(addresses, null, 4),
)

const getAddress = async ({ chain, name }) => {
	if (!await isChainSpecific({ name }))
		chain = -1

	return (await getAddresses())?.[chain]?.[Case.constant(name)]
}

const saveAddress = async ({ chain = -1, name, address }) => {
	const addresses = await getAddresses()

	if (!addresses[chain])
		addresses[chain] = {}

	await setInfo({ name, chainSpecific: chain !== -1 })

	addresses[chain][Case.constant(name)] = address.toLowerCase()

	await saveAddresses(addresses)
}

module.exports = {
	getAddresses,
	getAddress,
	saveAddress,
}