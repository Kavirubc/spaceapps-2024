'use client';

import React, { useEffect, useState } from 'react';

const CountDown: React.FC = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date('2024-10-01T00:00:00'); // Replace with your event date
        const currentTime = new Date();
        const difference = eventDate.getTime() - currentTime.getTime();

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="flex flex-col justify-center items-center bg-dark text-white my-4  min-h-screen md:mt-0 mt-20">
            <div className="text-center">
                <span className="block text-white text-5xl font-bold mb-20">
                    Counts <span className="text-purple-500">Every</span> Second
                </span>
                <span className="block text-xl lg:text-3xl font-bold mb-20">
                    Until the Hackathon
                </span>
            </div>

            <div className='flex md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-8 p-8  text-center' >
                {Object.keys(timeLeft).map((interval) => (
                    <div key={interval} className="text-center">
                        <span className="block text-pink-500 text-xl lg:text-3xl font-bold">
                            {interval.charAt(0).toUpperCase() + interval.slice(1)}
                        </span>
                        <span className="block text-4xl lg:text-6xl font-bold">
                            {timeLeft[interval as keyof typeof timeLeft].toString().padStart(2, '0')}
                        </span>
                    </div>
                ))}

            </div>

        </main>
    );
};

export default CountDown;
