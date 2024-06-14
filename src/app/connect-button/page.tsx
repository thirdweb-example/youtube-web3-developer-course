'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ConnectButton, MediaRenderer, darkTheme } from "thirdweb/react";
import { client } from "../client";
import { createWallet } from "thirdweb/wallets";

const ConnectButtonPage: React.FC = () => {
    return (
        <div className="py-20">
            <Header 
                title="ConnectButton UI Component"
                subtitle="Learn what our ConnectButton UI component is, how to use it, and how to customize it."
            />
            <ConnectButtons />
            <Footer />
        </div>
    )
};

function ConnectButtons() {
    return (
      <div className="grid gap-4 lg:grid-cols-3 justify-center">
        <DefaultConnectButton />
        <CustomWallets />
        <ButtonApperance />
        <CustomThemeButton />
      </div>
    );
}

//Default ConnectButton UI Component
function DefaultConnectButton() {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Default ConnectButton Component</p>
            <ConnectButton
                client={client}
                //Change modal size to compact or wide
                connectModal={{
                    size: "compact"
                }}
            />
        </div>
    )
}

//Customize Wallets Displayed in ConnectButton
function CustomWallets() {
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
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Wallets Displayed</p>
            <ConnectButton
                client={client}
                //Display custom wallets
                wallets={wallets}
                //Display recommended wallets
                recommendedWallets={recommendedWallets}
            />
        </div>
    )
}

//Customize Button and Modal Apperance
function ButtonApperance() {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Button Apperance</p>
            <ConnectButton
                client={client}
                // Customize button text
                connectButton={{
                    label: "Sign in",
                }}
                // Customize modal title, icon, and welcome screen
                connectModal={{
                    title: "Hello",
                    titleIcon: "",
                    showThirdwebBranding: false,
                    // welcomeScreen: {
                    //     title: "Welcome",
                    //     subtitle: "Sign in to continue",
                    //     img: {
                    //         src: "https://placehold.co/400",
                    //         height: 200,
                    //         width: 200,
                    //     }
                    // }
                    welcomeScreen: () => <CustomWelcomeScreen />
                }}
            />
        </div>
    )
}

//Custom Welcome Screen Component
function CustomWelcomeScreen() {
    return (
        <div>
            <MediaRenderer
                client={client}
                src={"https://placehold.co/400x600"}
                height={"auto"}
                width={"100%"}
            />
        </div>
    )
}

//Customize Button Theme
function CustomThemeButton() {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Button Theme</p>
            <ConnectButton
                client={client}
                //Customize button theme
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
        </div>
    )
}

export default ConnectButtonPage;