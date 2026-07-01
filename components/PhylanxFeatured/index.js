// Featured project block — full-width, sits right after the hero.
// Edit the fields below to update the copy / links.
const phylanx = {
    status: "Actively building",
    title: "Phylanx",
    role: "Founder & Lead Protocol Engineer",
    desc:
        "The trust check for AI agents that move money. Before an autonomous agent can trade or transact on Solana, it gets a verifiable Phylanx reputation score — so any protocol or counterparty can confirm, in one check, that the agent is legit and behaving correctly. On-chain Rust/Anchor programs issue threshold-signed certificates (3-of-5), backed by a Byzantine-fault-tolerant oracle cluster, an SDK, and a REST API for permissionless reads.",
    tags: ["Rust", "Anchor", "Solana", "Python", "TypeScript", "Next.js"],
    links: [
        { label: "GitHub", href: "https://github.com/terabyte-trifler/helixor" },
        { label: "Live Demo", href: "https://phylanx.com/" },
    ],
};

export default function PhylanxFeatured() {
    return (
        <section className="phylanx-featured" data-aos="fade-up">
            <div className="phylanx-status">
                <span className="phylanx-dot" />
                {phylanx.status}
            </div>

            <h2 className="phylanx-title">{phylanx.title}</h2>
            <p className="phylanx-role">{phylanx.role}</p>
            <p className="phylanx-desc">{phylanx.desc}</p>

            <div className="phylanx-tags">
                {phylanx.tags.map((t) => (
                    <span key={t}>{t}</span>
                ))}
            </div>

            <div className="phylanx-links">
                {phylanx.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                        {l.label} →
                    </a>
                ))}
            </div>

            <style jsx>{`
                .phylanx-featured {
                    background: #1c1c1c; /* match your skill cards */
                    border: 0.5px solid #2e2e2e;
                    border-radius: 12px;
                    padding: 2.5rem;
                    margin: 3rem auto;
                    max-width: 1200px; /* match your content width */
                }
                .phylanx-status {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 1.25rem;
                    font-size: 13px;
                    color: #8a8a8a;
                }
                .phylanx-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #4ade80; /* your green */
                }
                .phylanx-title {
                    font-size: 28px;
                    font-weight: 500;
                    color: #fff;
                    margin: 0 0 4px;
                }
                .phylanx-role {
                    font-size: 14px;
                    color: #8a8a8a;
                    margin: 0 0 1.25rem;
                }
                .phylanx-desc {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #d4d4d4;
                    margin: 0 0 1.5rem;
                    max-width: 85%;
                }
                .phylanx-tags {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    margin-bottom: 1.5rem;
                }
                .phylanx-tags span {
                    font-size: 13px;
                    padding: 5px 12px;
                    border-radius: 999px;
                    background: rgba(74, 222, 128, 0.12);
                    color: #4ade80;
                }
                .phylanx-links {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                    padding-top: 1.25rem;
                    border-top: 0.5px solid #2e2e2e;
                }
                .phylanx-links a {
                    font-size: 14px;
                    color: #4ade80;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                }
                @media (max-width: 700px) {
                    .phylanx-featured {
                        padding: 1.5rem;
                        margin: 2rem 1rem;
                    }
                    .phylanx-desc {
                        max-width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}
