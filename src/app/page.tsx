import Link from 'next/link';
import Image from 'next/image';

export default function Homepage() {
    return (
        <main className="font-sans">
            {/* Hero Section */}
            <section
                className="relative bg-green-900 text-white py-24 px-4 text-center"
                style={{
                    backgroundImage: "url('/images/auth.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                }}
            >
                <div className="bg-green-800 bg-opacity-80 absolute inset-0 z-0"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Empowering You to Save and Grow
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Join Allater Sacco and manage your finances anywhere,
                        anytime.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link
                            href="/register"
                            className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
                        >
                            Join Now
                        </Link>
                        <a
                            href="/downloads/app.apk"
                            className="bg-gray-100 text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-white"
                        >
                            Download App
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                <p className="text-gray-700 text-lg">
                    Allater Sacco is a trusted financial cooperative offering
                    members easy access to savings, affordable loans, and
                    digital banking services through secure mobile technology.
                </p>
            </section>

            {/* Features Section */}
            <section className="bg-gray-100 py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Our Core Services
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center max-w-6xl mx-auto">
                    {[
                        {
                            title: 'Savings Accounts',
                            icon: '🏦',
                            desc: 'Save securely with competitive interest.',
                        },
                        {
                            title: 'Loan Services',
                            icon: '💸',
                            desc: 'Access affordable loans with flexible terms.',
                        },
                        {
                            title: 'Shares & Membership',
                            icon: '🤝',
                            desc: 'Become a shareholder and grow with us.',
                        },
                        {
                            title: 'Mpesa Integration',
                            icon: '📲',
                            desc: 'Deposit & withdraw funds via Mpesa.',
                        },
                        {
                            title: 'Secure Transactions',
                            icon: '🔐',
                            desc: 'We use TransUnion verification & data encryption.',
                        },
                        {
                            title: 'Mobile Access',
                            icon: '📱',
                            desc: 'Manage your account anytime, anywhere.',
                        },
                    ].map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-xl shadow-md"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* App Download Section */}
            <section className="py-16 px-6 text-center bg-green-50">
                <h2 className="text-3xl font-bold mb-4">
                    Download Our Mobile App
                </h2>
                <p className="text-gray-700 mb-6">
                    Access your Sacco account on the go, apply for loans, and
                    monitor savings directly from your phone.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="/downloads/app.apk"
                        className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800"
                    >
                        Download APK
                    </a>
                    <a
                        href="https://play.google.com/store"
                        className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800"
                    >
                        Get on Google Play
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-10 px-6 text-center">
                <p className="mb-2">
                    &copy; {new Date().getFullYear()} Allater Sacco. All rights
                    reserved.
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                    <a href="/privacy" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="/terms" className="hover:underline">
                        Terms of Service
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact
                    </a>
                </div>
            </footer>
        </main>
    );
}
