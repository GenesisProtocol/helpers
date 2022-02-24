const fs = require('fs').promises

const ADDRESSES_FILE_PATH = './addresses.json'

const getAddresses = async () => JSON.parse((await fs.readFile(ADDRESSES_FILE_PATH)).toString())

const saveAddresses = async addresses => fs.writeFile(
	ADDRESSES_FILE_PATH,
	JSON.stringify(addresses, null, 4),
)

const getAddress = async ({ chain, name }) => (await getAddresses())?.[chain]?.[name]

const saveAddress = async ({ chain, name, address }) => {
	const addresses = await getAddresses()

	if (!addresses[chain])
		addresses[chain] = {}

	addresses[chain][name] = address.toLowerCase()

	await saveAddresses(addresses)
}

module.exports = {
	getAddresses,
	getAddress,
	saveAddress,
}