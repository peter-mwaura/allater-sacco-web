'use client';

import Footer from '@/components/dashboard/footer/footer';
import Navbar from '@/components/dashboard/navbar/navbar';
import Sidebar from '@/components/dashboard/sidebar/sidebar';
import { PropsWithChildren, useState } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar - Hidden on small screens, shown from md and up */}
            <div
                className={`fixed z-50 top-0 left-0 h-full w-4/5 max-w-xs p-5
              bg-gradient-to-br from-gray-100 to-gray-200
              transition-transform duration-300 ease-in-out transform
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
              md:static md:translate-x-0 md:w-1/5 md:block`}
            >
                <Sidebar />
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <div className="w-full md:w-4/5 p-5">
                <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
