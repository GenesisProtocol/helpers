const fs = require('fs').promises
const path = require('path')
const Case = require('case')
const ethers = require('ethers')

const getFilePath = name => path.join(__dirname, `../data/abis/${Case.constant(name)}.json`)

const getABI = ({ name }) => require(getFilePath(name))

const saveABI = ({ name, abi }) => fs.writeFile(
	getFilePath(name),
	JSON.stringify(abi.format(ethers.utils.FormatTypes.minimal)),
)

module.exports = {
	getABI,
	saveABI,
}