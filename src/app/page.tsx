import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="flex items-center justify-between">
            <p>HomePage</p>
            <div>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/login">Login</Link>
            </div>
        </div>
    );
};

export default HomePage;
