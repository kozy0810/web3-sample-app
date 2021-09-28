
import moment from 'moment';
import Lockdrop from '../contracts/Lockdrop.json';

const LOCKDROP_DURATION = 30;

export const firstLockdropStart = moment.unix(1584230400); //Todo: デプロイ前に修正
export const firstLockdropEnd = firstLockdropStart.clone().add(LOCKDROP_DURATION, 'days');

export interface LockdropContract {
    type: 'main' | 'private';
    address: string;
    blockHeight: number;
}

export const firstLockContract: LockdropContract[] = [
    {
        type: 'main',
        address: '0x458DaBf1Eff8fCdfbF0896A6Bd1F457c01E2FfD6',
        blockHeight: 9662816,
    },
    { type: 'private', address: Lockdrop.networks[5777].address, blockHeight: 0 },
];

export interface OptionItem {
    label: string; // the dropdown display label
    value: number; // dropdown select return value
    rate: number;
}

export const ethDurations: OptionItem[] = [
    { label: '1 Minutes', value: 1, rate: 10 },
    { label: '30 Days', value: 30, rate: 24 },
    { label: '100 Days', value: 100, rate: 100 },
    { label: '300 Days', value: 300, rate: 360 },
    { label: '1000 Days', value: 1000, rate: 1600 },
];

export const isRopsten = (currentNetwork: string) => {
    return currentNetwork === 'ropsten';
};

