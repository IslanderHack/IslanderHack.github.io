import React from 'react';

const NavBar = () => (
    <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#ffffffcc',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid #eee',
        padding: '1rem',
        font: 'Quicksand, sans-serif',
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        zIndex: 1000
    }}>
        <a href="#about">About</a>
        <a href="#happening">What’s Happening</a>
        <a href="#schedule">Schedule</a>
        <a href="#registration">Registration</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact">Contact</a>
    </nav>
);

function App() {
    return (
        <>
            <NavBar/>
            <div style={{ fontFamily: 'Quicksand, sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
                <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2.5rem', color: '#0077be' }}>
                        IslanderHack <span style={{ fontFamily: 'Quicksand, sans-serif'}}>2025</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#333' }}>
                        Official Hackathon of Texas A&M University – Corpus Christi 🌊
                    </p>
                </header>

                <section id="about" style={{ marginBottom: '2rem' }}>
                    <h2>🧠 About Us</h2>
                    <p>
                        IslanderHack is a three-day in-person hackathon hosted at Texas A&M University - Corpus Christi where students
                        come together to build tech projects, learn new skills, and meet fellow hackers.
                    </p>
                </section>

                <section id="happening" style={{ marginBottom: '2rem' }}>
                    <h2>🌴 What’s Happening</h2>
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
                    <ul>
                        <li>Day 1: Kickoff & Team Formation</li>
                        <li>Day 2: Hacking & Workshops</li>
                        <li>Day 3: Project Submission & Awards</li>
                    </ul>
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

                <section id="contact" style={{ marginBottom: '2rem' }}>
                    <h2>🧑‍💻 Want to Help?</h2>
                    <p>
                        Interested in building IslanderHack or joining the team? Reach out!
                    </p>
                    <p>
                        📧 <strong>Email:</strong> <a href="mailto:IslanderHack@tamucc.edu">IslanderHack@tamucc.edu</a><br />
                        📷 <strong>Instagram:</strong> (coming soon)
                    </p>
                </section>

                <footer style={{ textAlign: 'center', fontSize: '0.9rem', color: '#777', marginTop: '4rem' }}>
                    🌊 Built by the IslanderHack25 Operations Team
                </footer>
            </div>
        </>
    );
}

export default App;
