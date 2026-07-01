import Head from 'next/head'
import userInfo from "../../data/usersInfo.json"

export default function DomHead({ pageName = "Home Page" }) {

    return (
        <Head>
            <title>{userInfo.full_name} — {pageName}</title>
            {/* meta tags begins */}
            {/* Primary Meta Tags */}
            <meta name="title" content="Gurnoor Singh — Smart Contract Engineer & Full-Stack Developer" />
            <meta name="description" content="Smart Contract Engineer & Full-Stack Developer. Security-first smart contracts on Ethereum & Solana — tested, gas-optimized, audit-ready — with clean Web3 frontends." />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://gurnoorsingh.vercel.app/" />
            <meta property="og:title" content="Gurnoor Singh — Smart Contract Engineer & Full-Stack Developer" />
            <meta property="og:description" content="Security-first smart contracts on Ethereum & Solana — tested, gas-optimized, audit-ready — with clean Web3 frontends." />
            <meta property="og:image" content="https://gurnoorsingh.vercel.app/images/avatar/avatar.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://gurnoorsingh.vercel.app/" />
            <meta property="twitter:title" content="Gurnoor Singh — Smart Contract Engineer & Full-Stack Developer" />
            <meta property="twitter:description" content="Security-first smart contracts on Ethereum & Solana — tested, gas-optimized, audit-ready — with clean Web3 frontends." />
            <meta property="twitter:image" content="https://gurnoorsingh.vercel.app/images/avatar/avatar.png" />

            {/* meta tags end */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
    )
}

