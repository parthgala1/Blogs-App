import React from 'react';
import Contact from './LandingPage/Contact'; // Assuming Contact component is in a separate file

const ContactUs = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto">
                    {/* Header content */}
                </div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow">
                <div className="container mx-auto">
                    {/* Main content */}
                </div>
            </main>

            {/* Footer Section with Contact Component */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto">
                    <Contact />
                </div>
            </footer>
        </div>
    );
}

export default ContactUs;
