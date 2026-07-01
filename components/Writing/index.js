import { Container } from "..";

// Writing / Medium articles showcase.
// EDIT the fields below — profileUrl and the featured articles list.
const writing = {
    totalCount: "50+",
    profileUrl: "https://medium.com/@singhgurnoor080",
    articles: [
        {
            title: "Writing My First Solana Program using Rust and Anchor",
            url: "https://coinsbench.com/writing-my-first-solana-program-using-rust-and-anchor-cc0444e25884",
            description:
                "Building an on-chain program on Solana from scratch with Rust and the Anchor framework.",
        },
        {
            title: "Getting Started with Rust: A Beginner’s Guide",
            url: "https://coinsbench.com/getting-started-with-rust-a-beginners-guide-cf165eb340ed",
            description:
                "A practical intro to Rust — the language behind Solana and modern systems programming.",
        },
        {
            title: "React Deep Dive: Understanding React Through Simple Examples",
            url: "https://medium.com/@singhgurnoor080/in-this-post-well-break-down-react-in-the-most-intuitive-way-by-contrasting-it-with-vanilla-90caf7005024",
            description:
                "Breaking down React intuitively by contrasting it with vanilla JavaScript.",
        },
        {
            title: "A Practical MongoDB Guide for Beginners (Full-Stack Example)",
            url: "https://medium.com/@singhgurnoor080/a-practical-mongodb-guide-for-beginners-with-a-full-stack-example-044a0640ce6c",
            description:
                "A hands-on MongoDB walkthrough backed by a complete full-stack example.",
        },
        {
            title: "JavaScript Promises — The Ultimate Beginner’s Guide",
            url: "https://medium.com/@singhgurnoor080/javascript-promises-the-ultimate-beginners-guide-ee965c0f167f",
            description:
                "Master async JavaScript: promises, chaining, and error handling explained simply.",
        },
        {
            title: "Understanding Functions and Asynchronous Code in JavaScript",
            url: "https://medium.com/@singhgurnoor080/understanding-functions-and-asynchronous-code-in-javascript-f577c43282b8",
            description:
                "How functions and asynchronous execution really work under the hood in JS.",
        },
    ],
};

export default function Writing() {
    return (
        <div id="writing" className="w-full h-auto p-0 relative mb-[80px]" data-aos="fade-up">
            <Container>
                <div className="writing-head">
                    <div>
                        <p className="writing-eyebrow">Writing</p>
                        <h1 className="writing-title">
                            Articles &amp; Technical Writing
                        </h1>
                    </div>
                    <div className="writing-count">
                        <span className="writing-count-num">{writing.totalCount}</span>
                        <span className="writing-count-label">Articles Published</span>
                    </div>
                </div>

                <div className="writing-grid">
                    {writing.articles.map((a, i) => (
                        <a
                            key={i}
                            href={a.url}
                            target="_blank"
                            rel="noreferrer"
                            className="writing-card"
                        >
                            <h3 className="writing-card-title">{a.title}</h3>
                            <p className="writing-card-desc">{a.description}</p>
                            <span className="writing-card-link">Read on Medium →</span>
                        </a>
                    ))}
                </div>

                <div className="writing-cta">
                    <a href={writing.profileUrl} target="_blank" rel="noreferrer">
                        Read all {writing.totalCount} on Medium →
                    </a>
                </div>
            </Container>

            <style jsx>{`
                .writing-head {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 16px;
                    margin-bottom: 1.75rem;
                }
                .writing-eyebrow {
                    font-size: 12px;
                    color: #8a8a8a;
                    margin: 0 0 6px;
                }
                .writing-title {
                    font-size: 30px;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                }
                .writing-count {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
                .writing-count-num {
                    font-size: 34px;
                    font-weight: 700;
                    color: #4ade80;
                    line-height: 1;
                }
                .writing-count-label {
                    font-size: 11px;
                    color: #8a8a8a;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .writing-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 16px;
                }
                .writing-card {
                    display: flex;
                    flex-direction: column;
                    background: #1c1c1c;
                    border: 0.5px solid #2e2e2e;
                    border-radius: 12px;
                    padding: 1.5rem;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .writing-card:hover {
                    border-color: #4ade80;
                    transform: translateY(-3px);
                }
                .writing-card-title {
                    font-size: 17px;
                    font-weight: 600;
                    color: #fff;
                    margin: 0 0 10px;
                }
                .writing-card-desc {
                    font-size: 14px;
                    line-height: 1.55;
                    color: #d4d4d4;
                    margin: 0 0 18px;
                    flex-grow: 1;
                }
                .writing-card-link {
                    font-size: 13px;
                    color: #4ade80;
                    font-weight: 600;
                }
                .writing-cta {
                    margin-top: 1.75rem;
                }
                .writing-cta a {
                    display: inline-block;
                    font-size: 14px;
                    color: #4ade80;
                    text-decoration: none;
                    border: 2px solid #4ade80;
                    padding: 10px 22px;
                    border-radius: 30px;
                    transition: all 0.2s ease;
                }
                .writing-cta a:hover {
                    background: rgba(74, 222, 128, 0.12);
                }
            `}</style>
        </div>
    );
}
