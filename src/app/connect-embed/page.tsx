'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ConnectButton, ConnectEmbed, darkTheme, useActiveAccount } from "thirdweb/react";
import { client } from "../client";
import { createWallet } from "thirdweb/wallets";

const ConnectEmbedPage: React.FC = () => {
    return (
        <div className="py-20">
            <Header 
                title="ConnectEmbed UI Component"
                subtitle="Learn what our ConnectEmbed UI component is, how to use it, and how to customize it."
            />
            <ConnectEmbeds />
            <Footer />
        </div>
    )
};

function ConnectEmbeds() {
    return (
      <div className="grid gap-4 lg:grid-cols-3 justify-center">
        <DefaultConnectEmbed />
        <CustomWalletsConnectEmbed />
        <CustomThemeConnectEmbed />
      </div>
    );
}

// Default ConnectEmbed UI Component
function DefaultConnectEmbed() {
    // Check if wallet is connected
    const account = useActiveAccount();

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Default Connect Embed</p>
            <ConnectEmbed
                client={client}
            />
            {/* Show ConnectButton in connect state when wallet is connected */}
            {account && (
                <ConnectButton 
                    client={client}
                />
            )}
        </div>
    )
}

// Customize Wallets Displayed in ConnectEmbed
function CustomWalletsConnectEmbed() {
    // Check if wallet is connected
    const account = useActiveAccount();

    //Create an array of recommended wallets
    const recommendedWallets = [
        createWallet("com.coinbase.wallet"),
    ];
    //Create an array of wallets to display
    const wallets = [
        createWallet("com.coinbase.wallet"),
        createWallet("io.metamask"),
        createWallet("org.uniswap"),
        createWallet("com.exodus"),
        createWallet("com.robinhood.wallet")
    ];
    
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Wallets Connect Embed</p>
            <ConnectEmbed
                client={client}
                // Display custom wallets
                wallets={wallets}
                // Display recommended wallets
                recommendedWallets={recommendedWallets}
            />
            {/* Show ConnectButton in connect state when wallet is connected */}
            {account && (
                <ConnectButton 
                    client={client}
                />
            )}
        </div>
    )
}

// Customize modal theme in ConnectEmbed
function CustomThemeConnectEmbed() {
    // Check if wallet is connected
    const account = useActiveAccount();

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Custom Theme Connect Embed</p>
            <ConnectEmbed
                client={client}
                // Customize modal theme
                theme={darkTheme({
                    colors: {
                        primaryText: "#F6F8FF",
                        secondaryText: "#2B333D",
                        accentText: "#F6F8FF",
                        modalOverlayBg: "#DAE8FC",
                        modalBg: "#010101",
                        accentButtonBg: "#2469DA",
                        accentButtonText: "#F6F8FF",
                        secondaryButtonBg: "#010101",
                        secondaryButtonText: "#F6F8FF",
                        secondaryButtonHoverBg: "#2469DA",
                        separatorLine: "#2B333D",
                        borderColor: "#2B333D",

                        primaryButtonBg: "#2469DA",
                        primaryButtonText: "#F6F8FF",

                        connectedButtonBg: "#010101",
                        connectedButtonBgHover: "#2469DA",
                    },
                    //Customize font
                    fontFamily: "Arial Black",
                })}
            />
            {/* Show ConnectButton in connect state when wallet is connected */}
            {account && (
                <ConnectButton 
                    client={client}
                />
            )}
        </div>
    )
}

export default ConnectEmbedPage;