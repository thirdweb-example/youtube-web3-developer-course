'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { useActiveAccount, useActiveWallet, useConnect, useDisconnect } from "thirdweb/react";
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
      </div>
    );
}

function SingleWalletFlow () {
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

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

function SocialFlow() {
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

    const { connect } = useConnect();
    const { disconnect } = useDisconnect();

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

function EmailFlow() {
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

    const { connect } = useConnect();
    const { disconnect } = useDisconnect();

    const [isVerification, setIsVerification] = useState(false);
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");

    const sendVerification = async (email: string) => {
        await preAuthenticate({
            client: client,
            strategy: "email",
            email: email,
        });
        setIsVerification(true);
    };

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

function PassKeyFlow() {
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();

    const { connect } = useConnect();
    const { disconnect } = useDisconnect();

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

export default CustomLoginFlowPage;