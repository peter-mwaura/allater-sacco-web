'use client';

import { Input } from '@/components/ui/input';
import { usePathname } from 'next/navigation';
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from 'react-icons/md';

interface NavbarProps {
    onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
    const pathname = usePathname();
    const pageTitle = pathname.split('/').pop();

    return (
        <div className="flex justify-between items-center p-4 md:p-5 rounded-[10px] bg-[#12994A] shadow-md">
            {/* Hamburger for mobile */}
            <div className="flex items-center gap-3">
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={onMenuClick}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <div className="text-white text-xl font-semibold capitalize tracking-wide">
                    {pageTitle === 'dashboard' ? 'Dashboard' : pageTitle}
                </div>
            </div>

            <div></div>
            {/* <div className="flex items-center gap-5"> */}
            {/* Search */}
            {/* <div className="hidden sm:flex items-center gap-2.5 bg-[#2e374a] px-3 py-2 rounded-[10px]">
                    <MdSearch className="text-white" />
                    <Input
                        className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:outline-none"
                        type="text"
                        placeholder="Search..."
                    />
                </div> */}
            {/* Icons */}
            {/* <div className="flex gap-4 text-white items-center">
                    <button className="hover:text-gray-300 transition-colors">
                        <MdOutlineChat size={22} />
                    </button>
                    <button className="hover:text-gray-300 transition-colors">
                        <MdNotifications size={22} />
                    </button>
                    <button className="hover:text-gray-300 transition-colors">
                        <MdPublic size={22} />
                    </button>
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default Navbar;
