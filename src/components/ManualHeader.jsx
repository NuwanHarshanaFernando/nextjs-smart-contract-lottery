"use client"

import React from 'react';
import { useMoralis } from 'react-moralis';
import { useEffect } from 'react';

const ManualHeader = () => {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis()

    // If already web3Enabled do nothing, if not enableWeb3()
    // But it's annoying because when we disconnect and then press refresh in browser, we get a metamask popup
    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }

    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null account found")
            }
        })
    }, [])

    return (
        <div>
            {account ? (<div>Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}</div>) : (<button
                onClick={async () => {
                    await enableWeb3()
                    if (typeof window !== "undefined") {
                        window.localStorage.setItem("connected", "injected")
                    }

                }
                }
                disabled={isWeb3EnableLoading}
            >Connect</button>)}

        </div>
    );
}

export default ManualHeader;
