import Link from "next/link";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="py-20">
      <Header 
        title="Web3 Developer Course"
        subtitle="Learn how to build web3 applications with the Thirdweb Connect SDK."
      />
      <Menu />
      <Footer/>
    </div>
  );
}

function Menu() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center px-10">
      <MenuItem
        title="ConnectButton"
        href="/connect-button"
        description="Learn what our ConnectButton UI component is, how to use it, and how to customize it."
      />
      <MenuItem
        title="ConnectEmbed"
        href="/connect-embed"
        description="Learn what our ConnectEmbed UI component is, how to use it, and how to customize it."
      />
      <MenuItem
        title="In-App Wallet"
        href="/in-app-wallets"
        description="Learn what our In-App Wallets are and how to implement them in your application."
      />
      <MenuItem
        title="Custom Login Flow"
        href="/custom-login-flow"
        description="Learn how to use Connect SDK to build your own custom login flow."
      />
      <MenuItem
        title="Account Abstraction"
        href="/account-abstraction"
        description="Learn how to implement account abstraction with ConnectButton."
      />
      <MenuItem
        title="Wallet Connection"
        href="/wallet-connection"
        description="Learn how get data and interact with the blockchain with a connected wallet."
      />
    </div>
  )
}

function MenuItem(props: { title: string; href: string; description: string }) {
  return (
    <Link
      href={props.href}
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </Link>
  )
}