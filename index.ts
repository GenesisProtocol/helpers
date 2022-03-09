import addressesData from './data/addresses.json'
import chainsData from './data/chains.json'

interface ChainMap {
	[chain: string]: number
}

interface AddressMap {
	[chain: number]: {
		[name: string]: string
	}
}

export const chains: ChainMap = chainsData
export const addresses: AddressMap = addressesData
export const getAbi = (name): Promise<string[]> => import(`${__dirname}/data/abis/${name}`)
