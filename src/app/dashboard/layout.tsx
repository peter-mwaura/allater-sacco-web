import Footer from '@/components/dashboard/footer/footer';
import Navbar from '@/components/dashboard/navbar/navbar';
import Sidebar from '@/components/dashboard/sidebar/sidebar';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex">
            {/* Sidebar: hidden on small screens, visible on md and above */}
            <div className="hidden md:flex p-5 bg-gradient-to-br from-gray-100 to-gray-200">
                <Sidebar />
            </div>
            <div className="flex-1 p-5">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
