'use client'
import React from 'react';
import { motion } from 'framer-motion';

const CompetitionGuidelines: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Competition <span className="text-pink-500">Guidelines</span></h2>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.3
                            }
                        }
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} className="mb-8">
                        <h3 className="text-2xl font-bold text-center mb-4">Announcing</h3>
                        <p className="text-center text-xl text-pink-500 mb-2">The Hackathon For the<br />Third Time in Sri Lankan History<br />in direct collaboration with NASA</p>
                        <p className="text-center text-lg">We are proud and thrilled to announce, ‘NASA Space Apps Colombo, 2022’, for the third consecutive year, in line with NASA’s guidelines and direct collaboration. The event is organized by SEDS Sri Lanka, which is the international body that strives to promote space exploration and development via educational and engineering projects.</p>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} className="mb-8">
                        <h3 className="text-2xl font-bold text-pink-500 mb-4">What is NASA Space Apps Colombo?</h3>
                        <p>NASA Space Apps is a problem-solving challenge that primarily focuses on key NASA missions with regards to the Sun, the solar system, earth and basically the universe as a whole. The hackathon utilizes NASA’s free and open data and enables students to expand their knowledge and understanding of new scientific discoveries and in turn to develop new improvements to life on earth.</p>
                        <p>Space Apps is a NASA-led initiative organized in collaboration with Booz Allen Hamilton, Mind grub, Second Muse, and the NASA Open Innovation Applied Sciences Program. NASA Space Apps is a 48-hour hackathon running from the 1st to the 2nd of October 2022.</p>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} className="mb-8">
                        <h3 className="text-2xl font-bold text-pink-500 mb-4">How to participate?</h3>
                        <p>If you want to be a part of this amazing event, register your team in the link below and get ready to be challenged! Each team must consist of 2 to 6 members. All team members must be over the age of 13 years.</p>
                        <p className="text-center text-lg font-bold"><a href="https://2022.spaceappschallenge.org/locations/colombo" className="text-pink-500 hover:text-white">Register Here</a></p>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} className="mb-8">
                        <h3 className="text-2xl font-bold text-pink-500 mb-4">Participation Guidelines</h3>
                        <p><strong>Register for a Location:</strong> You will not be able to participate in the hackathon until you have registered for a location. Please click the &quot;Register Now&quot; button on home page to register for Space Apps Colombo. Or create a Space Apps account (if you do not already have one) to register. Registration will be open through the end of the hackathon. However, we encourage you to create an account and register for a location at least one week before the hackathon in order to join the chat rooms and form teams.</p>
                        <br />
                        <p><strong>Save the Date:</strong> The hackathon will begin Saturday, October 1st at 9:00 AM local time, when you and your team will be able to submit projects. The hackathon will end on Sunday, October 2nd at 11:59 PM local time. The chat rooms and team formation will open in the week prior.</p>
                        <br />
                        <p><strong>Recruit Friends:</strong> We encourage you to invite your friends along! Typical Space Apps teams have 2-6 participants (the limit is 6 members per team). Space Apps is all about collaboration and the most successful teams are often ones with a diverse set of skills and expertise -- coding, storytelling, creativity, data, science, engineering, technology, and more.</p>
                        <br />
                        <p><strong>Connect with the Community:</strong> Follow Space Apps on Twitter, Facebook, and YouTube to receive the latest announcements. In mid-September, tune in to our Virtual Bootcamp to access exclusive content from NASA, Local Leads, Space Apps Ambassadors, and former Global Winners. Guests will provide relevant workshops on data and other topics, discuss challenge themes, and provide tips for having a successful hackathon experience.</p>
                        <br />
                        <p><strong>Pick a Challenge:</strong> The challenge categories are now available! Browse the options and decide which one you want to solve! Recommended data for each challenge can be found here.</p>
                        <br />
                        <p><strong>Join the Chat Rooms:</strong> Space Apps chat will open more than a week prior to the hackathon. There, you can connect with the global community and search for teammates. There will also be challenge channels, where you can connect with Subject-Matter Experts (SMEs) and Space Apps Ambassadors once the hackathon starts. They will be available to answer your questions about the challenges and the data, particularly during Space Apps weekend.</p>
                        <br />
                        <p><strong>Join a Team:</strong> In the week leading up to the hackathon, you will be able to create your own team or request to join an existing team. To join an existing team, browse the teams on your location page or the challenge page of your choice.</p>
                        <br />
                        <p><strong>Submit a Project:</strong> Once the hackathon starts on October 1st at 9AM (local time), start solving! Before the event ends, remember to complete your team’s project page (where you describe your project, tell us about the data you used, and share a demonstration of your project).</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default CompetitionGuidelines;
