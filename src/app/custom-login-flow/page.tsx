'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

const CustomLoginFlowPage: React.FC = () => {
    return (
        <div className="py-20">
            <Header 
                title="Custom Login Flow"
                subtitle="Learn how to use Connect SDK to build your own custom login flow."
            />
            <CustomFlows />
            <Footer />
        </div>
    )
};

function CustomFlows() {
    return (
      <div className="grid gap-4 lg:grid-cols-3 justify-center">
        <SingleWalletFlow />
        <SocialFlow />
        <EmailFlow />
        <PassKeyFlow />
      </div>
    );
}

function SingleWalletFlow () {
    // Get the active account and wallet

    // Get the connect and disconnect functions

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Single Wallet</p>
        </div>
    )
}

function SocialFlow() {
    // Get the active account and wallet

    // Get the connect and disconnect functions

    // Create In-App Wallet and connect

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Social Login</p>
        </div>
    )
}

function EmailFlow() {
    // Get the active account and wallet

    // Get the connect and disconnect functions

    // State for email and verification code

    // Send verification code

    // Connect In-App Wallet with email and verification code

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Email Login</p>
        </div>
    )
}

function PassKeyFlow() {
    // Get the active account and wallet

    // Get the connect and disconnect functions

    // Create In-App Wallet with passkey and connect

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Passkey Login</p>
        </div>
    )
}

export default CustomLoginFlowPage;