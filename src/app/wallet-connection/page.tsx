'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ConnectButton, useActiveAccount, useActiveWallet, useActiveWalletChain } from "thirdweb/react";
import { client } from "../client";
import { inAppWallet } from "thirdweb/wallets";

const WalletConnectionPage: React.FC = () => {
    return (
        <div className="py-20">
            <Header 
                title="Wallet Connection"
                subtitle="Learn how get data and interact with the blockchain with a connected wallet."
            />
            <InAppWalletOptions />
            <Footer />
        </div>
    )
};

function InAppWalletOptions() {
    return (
      <div className="grid gap-4 lg:grid-cols-3 justify-center">
        <ConnectWallet />
        <GetWallet />
        <GetWalletAccount />
        <GetActiveChain />
      </div>
    );
}

function ConnectWallet () {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Connect a wallet</p>
            <ConnectButton
                client={client}
            />
        </div>
    )
}

function GetWallet () {
    const wallet = useActiveWallet();
    
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Get Wallet</p>
            <p className="text-zinc-300 text-base mb-4 md:mb-4">{wallet?.id}</p>
        </div>
    )
}

function GetWalletAccount () {
    const account = useActiveAccount();
    
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Get Account</p>
            <p className="text-zinc-300 text-base mb-4 md:mb-4">{account?.address}</p>
        </div>
    )
}

function GetActiveChain () {
    const chain = useActiveWalletChain();
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">ActiveChain</p>
            <p className="text-zinc-300 text-base mb-4 md:mb-4">{chain?.id}</p>
            <p className="text-zinc-300 text-base mb-4 md:mb-4">{chain?.name}</p>
            <p className="text-zinc-300 text-base mb-4 md:mb-4">{chain?.nativeCurrency?.symbol}</p>
        </div>
    )
}

export default WalletConnectionPage;