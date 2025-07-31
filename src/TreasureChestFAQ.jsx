import React, { useState } from 'react';

const faqs = [
    {
        question: "Who can attend the Hackathon?",
        answer: "IslanderHack is only open to Texas A&M University - Corpus Christi students.",
    },
    {
        question: "When is the deadline to register?",
        answer: "Register via our Microsoft Form before -/-. We have a limited amount of spots, so register early!",
    },
    {
        question: "How much experience do I need?",
        answer: "None required! IslanderHack is open to both beginners and advanced TAMUCC students.",
    },
    {
        question: "Do I have to present the entire time at IH?",
        answer: "No, but you must be present for the student check-ins, and the award ceremony."
    },
    {
        question: "How much will it cost to attend IslanderHack?",
        answer: "Nothing at all! Our event is open to students at zero cost."
    },
    {
        question: "How do teams work?",
        answer: "You may prepare a team in advance, but it is not required to have a team. There will be opportunities to find team members during the IslanderHack."
    },
    {
        question: "What should I bring?",
        answer: "Computers, blankets, snacks, and anything else you might need to feel comfy. But ensure to not bring anything you shouldn't have at the University."
    },
    {
        question: "Will their be workshops?",
        answer: "Absolutely! We want this hackathon to not only be an experience for project building, but an opportunity to grow professionally through various workshops."
    },
    {
        question: "Additional Questions?",
        answer: "If you have additional questions, don't hesitate to reach out to the IslanderHack@tamucc.edu email."
    }
];

const TreasureChestFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ maxWidth: 700, margin: 'auto', fontFamily: "'Quicksand', sans-serif" }}>
            {faqs.map((faq, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                    <button
                        onClick={() => toggle(i)}
                        style={{
                            background: '#6b3e00',
                            color: '#f9f1d1',
                            padding: '1rem 1.5rem',
                            width: '100%',
                            textAlign: 'left',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            position: 'relative',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            userSelect: 'none',
                        }}
                        aria-expanded={openIndex === i}
                    >
                        <span>{faq.question}</span>
                        <span
                            style={{
                                display: 'inline-block',
                                transform: openIndex === i ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                fontSize: '1.5rem',
                                marginLeft: '10px',
                            }}
                        >
              ▶
            </span>
                        {/* You could replace ▶ with a chest icon or SVG */}
                    </button>
                    {openIndex === i && (
                        <div
                            style={{
                                background: '#f9f1d1',
                                color: '#6b3e00',
                                padding: '1rem 1.5rem',
                                borderRadius: '0 0 10px 10px',
                                boxShadow: 'inset 0 0 10px rgba(107,62,0,0.4)',
                                fontSize: '1rem',
                                lineHeight: 1.5,
                                marginTop: '-5px',
                                userSelect: 'text',
                            }}
                        >
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TreasureChestFAQ;
