import React, { useState } from 'react';
import treasureMap from './assets/treasuremap.png';

const daysLeft = Math.max(
    0,
    Math.ceil((new Date('2025-09-19') - new Date()) / (1000 * 60 * 60 * 24))
);

const scheduleData = {
    1: {
        title: "Friday",
        info: [
            { time: "1pm", name: "Check In", desc: "" },
            { time: "2pm", name: "Opening Ceremony", desc: "" },
            { time: "3pm", name: "Hacking Begins", desc: "" },
            { time: "3pm", name: "First Timer Workshop", desc: "New to Hackathons? Attend for insight to get the basic tools you'll need to succeed." },
            { time: "5pm", name: "Ideation Workshop", desc: "Join this workshop to brainstorm project ideas through fun activities and discussions." },
            { time: "6pm", name: "Dinner", desc: "" },
        ],
    },
    2: {
        title: "Saturday",
        info: [
            { time: "8:30am", name: "Breakfast & Check-In", desc: "" },
            { time: "9:00am", name: "Hacking Begins", desc: "" },
            { time: "9am", name: "Git Going Workshop", desc: "Learning GitHub doesn't have to be difficult. Check out this workshop to get started." },
            { time: "11am", name: "API 101 Workshop", desc: "Get started with API's in this workshop to integrate tools into your idea." },
            { time: "12pm", name: "Lunch", desc: "" },
            { time: "1pm", name: "Intro to AI Workshop", desc: "Explore the fundamentals and possibilities of AI throughout this workshop." },
            { time: "2:30pm", name: "Mini Scavenger Hunt", desc: "" },
            { time: "3:30pm", name: "UI/UX Workshop", desc: "Struggling to design your project? Get ideas from this workshop to make your project user-friendly." },
            { time: "5:00pm", name: "Perfect Your Pitch", desc: "Start your pitch with a dose of knowledge by joining this workshops for tips and tricks." },
            { time: "6:00pm", name: "Dinner", desc: "" },
            { time: "7:00pm", name: "Uncharted Screening", desc: "Join us for a break to watch Uncharted & enjoy popcorn and snacks!" },
        ],
    },
    3: {
        title: "Sunday",
        info: [
            { time: "8:30am", name: "Breakfast & Check-In", desc: "" },
            { time: "10am", name: "Submission Deadline", desc: "" },
            { time: "10am", name: "Pitching Practices", desc: "" },
            { time: "11am", name: "Project Pitches", desc: "" },
            { time: "12pm", name: "Lunch Mixer", desc: "" },
            { time: "1pm", name: "Judging Begins", desc: "" },
            { time: "4pm", name: "Award Ceremony", desc: "" },
        ],
    },
    4: {
        title: "Prizes",
        info: [
            { time: "", name: "To be Announced!", desc: "" },
        ],
    },
    5: {
        title: `🕰️ ${daysLeft} day${daysLeft !== 1 ? 's' : ''} til IslanderHack!`,
        info: [
            { time: "", name: "", desc: "" },
        ],
    },
};


const positions = {
    1: { top: '73%', left: '22%' },
    2: { top: '55%', left: '24%' },
    3: { top: '49%', left: '74%' },
    4: { top: '25%', left: '28.5%' },
    5: { top: '72%', left: '67.5%' },
};

const TreasureMapSchedule = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pirata+One&display=swap');

        .map-container {
          position: relative;
          max-width: 900px;
          margin: auto;
          font-family: 'Quicksand';
          user-select: none;
        }
        .map-image {
          width: 100%;
          display: block;
          border: 5px solid #6b3e00;
          border-radius: 15px;
          box-shadow: 5px 5px 15px rgba(107, 62, 0, 0.7);
        }
        .marker {
          position: absolute;
          background: #f9f1d1;
          border: 3px solid #6b3e00;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          font-weight: bold;
          font-size: 1.5rem;
          color: #6b3e00;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-shadow: 1px 1px 0 #6b3e00
          transition: transform 0.2s ease;
          user-select: none;
        }
        .marker:hover {
          transform: scale(1.3);
          z-index: 10;
        }
        .tooltip {
          font-feature-settings: "liga" 0;
          -webkit-font-feature-settings: "liga" 0;
          -moz-font-feature-settings: "liga" 0;
          position: absolute;
          bottom: 110%;
          left: 50%;
          transform: translateX(-50%);
          background: #f9f1d1;
          border: 3px solid #6b3e00;
          border-radius: 12px;
          padding: 1rem 1.5rem;
          box-shadow: 4px 4px 8px rgba(107, 62, 0, 0.5);
          font-size: 1rem;
          line-height: 1.3;
          white-space: nowrap;
          max-width: 320px;
          color: #6b3e00;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 20;
        }
        .marker:hover .tooltip {
          opacity: 1;
          pointer-events: auto;
        }
        
        .workshop-text {
        border-bottom: 2px dotted #6b3e00;
        }
        .workshop-text:hover {
        text-decoration: none; /* remove default underline if any */
        }
        .tooltip h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.3rem;
          border-bottom: 1px solid #6b3e00;
          padding-bottom: 0.3rem;
          text-align: center;
        }
        .tooltip p {
          margin: 0;
          font-family: 'Quicksand';
        }
      `}</style>

            <div className="map-container">
                <img src={treasureMap} alt="Treasure Map" className="map-image" />


                {Object.entries(scheduleData).map(([key, { title, info }]) => {
                    const isHiddenMarker = key === '4';
                    const isCompassMarker = key === '5';
                    return (
                        <div
                            key={key}
                            className="marker"
                            style={{
                                ...positions[key],
                                background: isHiddenMarker || isCompassMarker ? 'transparent' : undefined,
                                border: isHiddenMarker || isCompassMarker ? 'none' : undefined,
                                width: isHiddenMarker || isCompassMarker ? '3rem' : '2.5rem',
                                height: isHiddenMarker || isCompassMarker ? '3rem' : '2.5rem',
                                color: isHiddenMarker || isCompassMarker ? 'transparent' : '#6b3e00',
                            }}
                            onMouseEnter={() => setHovered(key)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {key !== '4' && key /* Hide number for the hidden marker */}
                            {hovered === key && (
                                <div className="tooltip">
                                    <h3>{title}</h3>
                                    {info.map(({ time, name, desc }, i) => {
                                        // Skip rendering if both time and name are empty
                                        if (!time && !name) return null;

                                        return (
                                            <p key={i} style={{ margin: '0 0 0.3rem 0', position: 'relative' }}>
                                                <span>{time && `${time} - `}</span>
                                                <span
                                                    className={desc ? "workshop-text" : ""}
                                                    style={{ cursor: desc ? 'help' : 'default' }}
                                                    onMouseEnter={(e) => {
                                                        if (!desc) return;
                                                        const tooltip = e.currentTarget.querySelector('.event-desc-tooltip');
                                                        if (tooltip) tooltip.style.opacity = '1';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (!desc) return;
                                                        const tooltip = e.currentTarget.querySelector('.event-desc-tooltip');
                                                        if (tooltip) tooltip.style.opacity = '0';
                                                    }}
                                                >
        {name}
                                                    {desc && (
                                                        <div
                                                            className="event-desc-tooltip"
                                                            style={{
                                                                position: 'absolute',
                                                                bottom: '100%',
                                                                left: '0',
                                                                backgroundColor: '#f9f1d1',
                                                                border: '2px solid #6b3e00',
                                                                borderRadius: '8px',
                                                                padding: '0.3rem 0.5rem',
                                                                whiteSpace: 'normal',
                                                                width: '220px',
                                                                fontSize: '0.85rem',
                                                                color: '#6b3e00',
                                                                opacity: 0,
                                                                pointerEvents: 'none',
                                                                transition: 'opacity 0.3s ease',
                                                                zIndex: 30,
                                                                boxShadow: '2px 2px 5px rgba(107, 62, 0, 0.3)'
                                                            }}
                                                        >
                                                            {desc}
                                                        </div>
                                                    )}
      </span>
                                            </p>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

        </>
    );
};

export default TreasureMapSchedule;

