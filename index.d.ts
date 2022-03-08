interface ChainMap {
	[chain: string]: number
}

interface AddressMap {
	[chain: number]: {
		[name: string]: string
	}
}

export const chains: ChainMap
export const addresses: AddressMap
