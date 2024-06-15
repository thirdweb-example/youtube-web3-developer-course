'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

const InAppWalletsPage: React.FC = () => {
    return (
        <div className="py-20">
            <Header 
                title="In-App Wallets"
                subtitle="Learn what In-App Wallets are and how to implement them into your app."
            />
            <InAppWalletOptions />
            <Footer />
        </div>
    )
};

function InAppWalletOptions() {
    return (
      <div className="grid gap-4 lg:grid-cols-3 justify-center">
        <AllOptions />
        <EmailOnly />
        <SocialOnly />
        <PhonePassKey />
      </div>
    );
}

// Default In-App Wallet options (all options)
function AllOptions () {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">All Options</p>
        </div>
    )
}

// In-App Wallet options with email only
function EmailOnly () {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Email Only</p>
        </div>
    )
}

// In-App Wallet options with social only
function SocialOnly () {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Social Only</p>
        </div>
    )
}

// In-App Wallet options with phone and pass key
function PhonePassKey () {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Phone + Pass Key</p>
        </div>
    )
}

export default InAppWalletsPage;