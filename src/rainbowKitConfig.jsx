"use client"

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { anvil, zksync } from "wagmi/chains";
export default getDefaultConfig({
    appName: 'NextJsSmartContractLotteryApp',
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    chains: [anvil, zksync],
    ssr: false
    // chains: [mainnet, polygon, optimism, arbitrum, base],
    // ssr: true, // If your dApp uses server side rendering (SSR)
});

