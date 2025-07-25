This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Create a next js app

To Create a nextJs Application

```
pnpm create next-app@latest
```

## Connect our wallet with a nicer UI

Go to https://rainbowkit.com/

```
npm init @rainbow-me/rainbowkit@latest
```
or
```
pnpm add @rainbow-me/rainbowkit@latest
```
or
```
pnpm add @rainbow-me/rainbowkit@2.2.4
```

Go to docs and Install RainbowKit and its peer dependencies, wagmi, viem, and @tanstack/react-query.

```
npm install @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query
```

Create rainbowKitConfig.jsx file in src folder and add configs

Go to Installation -> WalletConnect Cloud

It will redirect to reown (https://dashboard.reown.com/sign-in)

Reown is a company that connect our wallet to our application

Copy the project Id

Create a new file called .env.local, the paste it as NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID

Add it for the projectId of rainbowKitConfig.jsx file

## Create providers

Create providers.jsx file inside app folder

Wagmi is for read from and write to blockchain

## Moralis

```
yarn add moralis react-moralis
```

Go to https://www.npmjs.com/package/react-moralis

Then install Moralis

```
yarn add moralis-v1 react-moralis
```

    // If already web3Enabled do nothing, if not enableWeb3()
    // But it's annoying because when we disconnect and then press refresh in browser, we get a metamask popup

Add This to onClick function of Connect button

```
    window.localStorage.setItem("connected", "injected")
```

```
if (typeof window !== "undefined") {
                        window.localStorage.setItem("connected", "injected")
}
```

Add this code inside useEffect

```
  if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
```

Now if already connected to a metamask account, and refresh we didn't get the metamask wallet popup.
But after disconnect accounts and then refresh browser, 
We get that annoying metamask wallet popup

So to overcome this issue, we have to add another useEfect to see if we disconnected

```
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
```


