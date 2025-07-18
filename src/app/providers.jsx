"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import config from "@/rainbowKitConfig"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit"
import { useState } from "react"
import "@rainbow-me/rainbowkit/styles.css"
import { MoralisProvider } from "react-moralis"

export function Providers({ children }) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        // <WagmiProvider config={config}>
        //     <QueryClientProvider client={queryClient}>
        //         <RainbowKitProvider>
        //             <MoralisProvider initializeOnMount={false}>
        //                 <ConnectButton />
        //                 {children}
        //             </MoralisProvider>
        //         </RainbowKitProvider>
        //     </QueryClientProvider>
        // </WagmiProvider>

        <MoralisProvider initializeOnMount={false}>
            {children}
        </MoralisProvider>
    )
}