'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

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
        </div>
    )
}

//Customize Wallets Displayed in ConnectButton
function CustomWallets() {
    //Create an array of recommended wallets
    
    //Create an array of wallets to display

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Wallets Displayed</p>
        </div>
    )
}

//Customize Button and Modal Apperance
function ButtonApperance() {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Button Apperance</p>
        </div>
    )
}

//Custom Welcome Screen Component
function CustomWelcomeScreen() {
    return (
        <div>
            {/* <MediaRenderer
                client={client}
                src={"https://placehold.co/400x600"}
                height={"auto"}
                width={"100%"}
            /> */}
        </div>
    )
}

//Customize Button Theme
function CustomThemeButton() {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Button Theme</p>
        </div>
    )
}

export default ConnectButtonPage;