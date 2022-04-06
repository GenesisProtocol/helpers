const fs = require('fs').promises
const path = require('path')
const Case = require('case')

const CONTRACT_INFO_FILE_PATH = path.join(__dirname, '../data/contract-info.json')

const getInfos = async () => JSON.parse((await fs.readFile(CONTRACT_INFO_FILE_PATH)).toString())

const saveInfos = async info => fs.writeFile(
	CONTRACT_INFO_FILE_PATH,
	JSON.stringify(info, null, 4),
)

const getInfo = async ({ name }) => (await getInfos())?.[Case.constant(name)]

const setInfo = async ({ name, chainSpecific }) => {
	const infos = await getInfos()

	name = Case.constant(name)

	if (!infos[name])
		infos[name] = {}

	infos[name].chainSpecific = chainSpecific

	await saveInfos(infos)
}

const isChainSpecific = async ({ name }) => (await getInfo({ name })).chainSpecific

module.exports = {
	setInfo,
	isChainSpecific,
}