'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

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

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Default Connect Embed</p>
        </div>
    )
}

// Customize Wallets Displayed in ConnectEmbed
function CustomWalletsConnectEmbed() {
    // Check if wallet is connected

    //Create an array of recommended wallets

    //Create an array of wallets to display
    
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Wallets Connect Embed</p>
        </div>
    )
}

// Customize modal theme in ConnectEmbed
function CustomThemeConnectEmbed() {
    // Check if wallet is connected

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Custom Theme Connect Embed</p>
        </div>
    )
}

export default ConnectEmbedPage;