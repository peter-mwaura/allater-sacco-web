'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// Define the type for the `item` prop
interface MenuLinkProps {
    item: {
        title: string;
        path: string;
        icon: ReactNode; // ReactNode allows the icon to be a React component
    };
}

const MenuLink = ({ item }: MenuLinkProps) => {
    const pathname = usePathname();
    return (
        <Link
            href={item.path}
            className={`flex p-5 items-center gap-2.5 hover:bg-[#12994A] my-[5px] rounded-[10px] ${
                pathname === item.path
                    ? 'bg-[#12994A] text-white' // Active state color change
                    : 'text-gray-800' // Default link color
            }`}
        >
            {item.icon}
            {item.title}
        </Link>
    );
};

export default MenuLink;
