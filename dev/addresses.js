const fs = require('fs').promises
const path = require('path')
const Case = require('case')

const ADDRESSES_FILE_PATH = path.join(__dirname, '../data/addresses.json')

const getAddresses = async () => JSON.parse((await fs.readFile(ADDRESSES_FILE_PATH)).toString())

const saveAddresses = async addresses => fs.writeFile(
	ADDRESSES_FILE_PATH,
	JSON.stringify(addresses, null, 4),
)

const getAddress = async ({ chain = -1, name }) => (await getAddresses())?.[chain]?.[Case.constant(name)]

const saveAddress = async ({ chain = -1, name, address }) => {
	const addresses = await getAddresses()

	if (!addresses[chain])
		addresses[chain] = {}

	addresses[chain][Case.constant(name)] = address.toLowerCase()

	await saveAddresses(addresses)
}

module.exports = {
	getAddresses,
	getAddress,
	saveAddress,
}