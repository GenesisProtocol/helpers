import {ethers} from "ethers";

export function getAddress({ chain, name }: { chain?: number, name: string }): Promise<string>;

export function getABI({ name }: { name: string }): Promise<string[]>;

export function getChain(): Promise<number>;

export function getContract({name}: {name: string}): Promise<ethers.Contract>

export function send(tx: any): Promise<any>
