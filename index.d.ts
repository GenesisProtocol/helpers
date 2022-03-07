export function getAddress({ chain, name }: { chain?: number, name: string }): Promise<string>;

export function getABI({ name }: { name: string }): Promise<string[]>;