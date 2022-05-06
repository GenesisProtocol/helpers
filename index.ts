import Case from 'case'
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

export const getAddress = ({ chain, name }: { chain?: number, name: string }): string | undefined =>
	addresses?.[chain || -1]?.[Case.constant(name)]

export const getAbi = async ({ name }: { name: string }): Promise<string[]> => (await import(`./data/abis/${Case.constant(name)}.json`)).default
