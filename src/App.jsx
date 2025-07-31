import React from 'react';
import TreasureMapSchedule from './TreasureMapSchedule.jsx';

const NavBar = () => (
    <nav style={{
        position: 'sticky',
        top: 0,
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid #eee',
        padding: '1rem',
        fontFamily: 'Quicksand, sans-serif',
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        zIndex: 1000
    }}>
        <a href="#about" className="nav-link">About</a>
        <a href="#schedule" className="nav-link">Schedule</a>
        <a href="#registration" className="nav-link">Registration</a>
        <a href="#faqs" className="nav-link">FAQs</a>
    </nav>
);

function BubbleLayer() {
    const bubbles = Array.from({ length: 15 }, (_, i) => ({
        left: Math.random() * 100 + '%',
        size: Math.random() * 40 + 20 + 'px',
        delay: Math.random() * 20 + 's',
        duration: 10 + Math.random() * 10 + 's',
    }));

    return (
        <div className="bubble-container">
            {bubbles.map((b, i) => (
                <img
                    key={i}
                    src="src/assets/Bubble.png"
                    className="bubble"
                    style={{
                        left: b.left,
                        width: b.size,
                        animationDelay: b.delay,
                        animationDuration: b.duration,
                    }}
                    alt="bubble"
                />
            ))}
        </div>
    );
}


function App() {
    return (
        <>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <BubbleLayer/>
                <NavBar/>
            <div style={{display: 'flex', justifyContent: 'center',maxWidth: '900px', padding: '2rem',}}>
            <div style={{fontFamily: 'Quicksand, sans-serif', padding: '2rem', maxWidth: '960px', width: '100%'}}>
                <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2.5rem', color: '#0077be' }}>
                        IslanderHack <span style={{ fontFamily: 'Quicksand, sans-serif'}}>2025</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem' }}>
                        Official Hackathon of Texas A&M University – Corpus Christi 🌊
                    </p>
                </header>

                <section id="about" style={{ marginBottom: '2rem' }}>
                    <h2>🧠 About Us</h2>
                    <p>
                        IslanderHack is a three-day in-person hackathon hosted at Texas A&M University - Corpus Christi where students
                        come together to build tech projects, learn new skills, and meet fellow hackers.
                    </p>
                    <ul>
                        <li>💻 <strong>Hackathon Dates:</strong> September 19th–21st, 2025</li>
                        <li>📍 <strong>Location:</strong> Texas A&M University – Corpus Christi</li>
                        <li>🎓 <strong>Open to:</strong> All TAMU–CC students, beginners welcome!</li>
                    </ul>
                </section>

                <section id="registration" style={{ marginBottom: '2rem' }}>
                    <h2>📝 Registration</h2>
                    <p>
                        Register by filling out the form{' '}
                        <a
                            href="https://example.com/register"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="circle-hover">here</span>
                        </a>.
                    </p>
                </section>

                <section id="schedule" style={{ marginBottom: '2rem' }}>
                    <h2>📅 Schedule</h2>
                    <TreasureMapSchedule />
                </section>


                <section id="faqs" style={{ marginBottom: '2rem' }}>
                    <h2>❓ FAQs</h2>
                    <h4>Who can join?</h4>
                    <p>All Texas A&M University – Corpus Christi students of any skill level are welcome!</p>
                    <h4>Do I need a team?</h4>
                    <p>No, you can come solo or with a team. We’ll help you find teammates if needed.</p>
                    <h4>Is it free?</h4>
                    <p>Yes, IslanderHack is completely free to attend.</p>
                </section>

                <footer style={{ textAlign: 'center', fontSize: '0.9rem', marginTop: '4rem' }}>
                    🌊 Built by the IslanderHack25 Operations Team
                </footer>
            </div>
            </div>
            </div>
        </>
    );
}

export default App;
