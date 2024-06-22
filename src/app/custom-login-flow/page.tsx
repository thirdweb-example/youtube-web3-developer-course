'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { useActiveAccount, useActiveWallet, useAutoConnect, useConnect, useConnectModal, useDisconnect } from "thirdweb/react";
import { client } from "../client";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { hasStoredPasskey, preAuthenticate } from "thirdweb/wallets/in-app";
import { useState } from "react";

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
        <ConnecModalButton />
      </div>
    );
}

// Create a custom login flow with a single wallet
function SingleWalletFlow () {
    // Get active account and wallet
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

    // Get connect and disconnect functions
    const { connect } = useConnect();
    const { disconnect } = useDisconnect();

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Single Wallet</p>
            {account && connectedWallet ? (
                <button
                    className="bg-red-500 text-white-400 px-4 py-2 rounded-md"
                    onClick={() => disconnect(connectedWallet)}
                >Disconnect</button>
            ) : (
                <button
                    className="bg-blue-500 text-white-400 px-4 py-2 rounded-md"
                    onClick={async () => connect(async () => {
                        const wallet = createWallet("io.metamask");
                        await wallet.connect({ client: client });
                        return wallet;
                    })}
                >Connect with Metamask</button>
            )}
        </div>
    )
}

// Create a custom login flow with social login
function SocialFlow() {
    // Get active account and wallet
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

    // Get connect and disconnect functions
    const { connect } = useConnect();
    const { disconnect } = useDisconnect();

    // Create In-App Wallet with social login and connect
    const handleLogin = async () => {
        await connect(async () => {
            const wallet = inAppWallet();
            await wallet.connect({
                client: client,
                strategy: "google",
            });
            return wallet;
        })
    };

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Social Login</p>
            {account && connectedWallet ? (
                <button
                    className="bg-red-500 text-white-400 px-4 py-2 rounded-md"
                    onClick={() => disconnect(connectedWallet)}
                >Disconnect</button>
            ) : (
                <>
                    <button
                        className="bg-blue-500 text-white-400 px-4 py-2 rounded-md"
                        onClick={handleLogin}
                    >Sign-in with Google</button>
                </>
            )}
        </div>
    )
}

// Create a custom login flow with email login
function EmailFlow() {
    // Get active account and wallet
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

    // Get connect and disconnect functions
    const { connect } = useConnect();
    const { disconnect } = useDisconnect();

    // State for email and verification code
    const [isVerification, setIsVerification] = useState(false);
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");

    // Send verification code to email
    const sendVerification = async (email: string) => {
        await preAuthenticate({
            client: client,
            strategy: "email",
            email: email,
        });
        setIsVerification(true);
    };

    // Create In-App Wallet with email login and connect
    const handleLogin = async (
        email: string,
        verificationCode: string
    ) => {
        await connect(async () => {
            const wallet = inAppWallet();
            await wallet.connect({
                client: client,
                strategy: "email",
                email: email,
                verificationCode: verificationCode,
            });
            return wallet;
        })
    };

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Email Login</p>
            {account && connectedWallet ? (
                <button
                    className="bg-red-500 text-white-400 px-4 py-2 rounded-md"
                    onClick={() => disconnect(connectedWallet)}
                >Disconnect</button>
            ) : (
                !isVerification ? (
                    <>
                        <input 
                            type="text" 
                            placeholder="Email"
                            className="bg-zinc-800 text-white-400 px-4 py-2 rounded-md mb-4"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 text-white-400 px-4 py-2 rounded-md"
                            onClick={() => sendVerification(email)}
                        >Login</button>
                    </>
                ) : (
                    <>
                        <input 
                            type="text" 
                            placeholder="Verification Code"
                            className="bg-zinc-800 text-white-400 px-4 py-2 rounded-md mb-4"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 text-white-400 px-4 py-2 rounded-md"
                            onClick={() => {
                                handleLogin(email, verificationCode)
                                setEmail("")
                                setVerificationCode("")
                            }}
                        >Verify</button>
                    </>
                )
            )}
        </div>
    )
}

// Create a custom login flow with passkey login
function PassKeyFlow() {
    // Get active account and wallet
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

    // Get connect and disconnect functions
    const { connect } = useConnect();
    const { disconnect } = useDisconnect();

    // Create In-App Wallet with passkey login and connect
    const handleLogin = async () => {
        await connect(async () => {
            const wallet = inAppWallet();
            const hasPasskey = await hasStoredPasskey(client);
            await wallet.connect({
                client: client,
                strategy: "passkey",
                type: hasPasskey ? "sign-in" : "sign-up",
            });
            return wallet;
        })
    };

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Passkey Login</p>
            {account && connectedWallet ? (
                <button
                    className="bg-red-500 text-white-400 px-4 py-2 rounded-md"
                    onClick={() => disconnect(connectedWallet)}
                >Disconnect</button>
            ) : (
                <>
                    <button
                        className="bg-blue-500 text-white-400 px-4 py-2 rounded-md"
                        onClick={handleLogin}
                    >Sign-in with Passkey</button>
                </>
            )}
        </div>
    )
}

// Create a custom button that opens the Connect Modal
function ConnecModalButton() {
    // Get active account and wallet
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

    // Get disconnect functions
    const { disconnect } = useDisconnect();

    // Get connect modal function
    const { connect } = useConnectModal();

    // Handle login with connect modal
    async function handleLogin() {
        const wallet = await connect({ client: client });
    }

    // Auto connect wallet on page load
    const { data: autoConnected } = useAutoConnect({
        client: client,
        wallets: [
            createWallet("io.metamask"),
        ],
        onConnect(wallet) {
            console.log("Auto connected wallet:", wallet);
        },
    });

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Connect Modal</p>
            {account && connectedWallet ? (
                <button
                    className="bg-red-500 text-white-400 px-4 py-2 rounded-md"
                    onClick={() => disconnect(connectedWallet)}
                >Disconnect</button>
            ) : (
                <>
                    <button
                        className="bg-green-500 text-white-400 px-4 py-2 rounded-md"
                        onClick={handleLogin}
                    >Connect Wallet</button>
                </>
            )}
        </div>
    )
}

export default CustomLoginFlowPage;