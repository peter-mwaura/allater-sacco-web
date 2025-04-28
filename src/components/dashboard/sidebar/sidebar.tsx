import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdAttachMoney,
    MdSavings,
    MdEqualizer,
    MdRequestQuote,
    MdVerifiedUser,
    MdGroupAdd,
    MdTrendingUp,
    MdWork,
    MdAnalytics,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from 'react-icons/md';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
    {
        title: 'Pages',
        list: [
            { title: 'Dashboard', path: '/dashboard', icon: <MdDashboard /> },
            {
                title: 'Users',
                path: '/dashboard/users',
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: 'Transactions',
                path: '/dashboard/transactions',
                icon: <MdAttachMoney />,
            },
            // {
            //     title: 'Savings',
            //     path: '/dashboard/savings',
            //     icon: <MdSavings />,
            // },
            // {
            //     title: 'Shares',
            //     path: '/dashboard/shares',
            //     icon: <MdEqualizer />,
            // },
            // {
            //     title: 'Loans',
            //     path: '/dashboard/loans',
            //     icon: <MdRequestQuote />,
            // },
        ],
    },
    // {
    //     title: 'Management',
    //     list: [
    //         {
    //             title: 'ID Verification',
    //             path: '/dashboard/id-verification',
    //             icon: <MdVerifiedUser />,
    //         },
    //         {
    //             title: 'Membership Requests',
    //             path: '/dashboard/requests',
    //             icon: <MdGroupAdd />,
    //         },
    //     ],
    // },
    // {
    //     title: 'Analytics',
    //     list: [
    //         { title: 'Revenue', path: '/dashboard/revenue', icon: <MdWork /> },
    //         {
    //             title: 'Reports',
    //             path: '/dashboard/reports',
    //             icon: <MdAnalytics />,
    //         },
    //         {
    //             title: 'Performance',
    //             path: '/dashboard/performance',
    //             icon: <MdTrendingUp />,
    //         },
    //     ],
    // },
    {
        title: 'User',
        list: [
            // {
            //     title: 'Settings',
            //     path: '/dashboard/settings',
            //     icon: <MdOutlineSettings />,
            // },
            // { title: 'Help', path: '/dashboard/help', icon: <MdHelpCenter /> },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className="sticky top-10 w-full bg-gradient-to-br from-gray-100 to-gray-200 p-5 rounded-lg shadow-lg">
            <div className="flex items-center gap-5 mb-5">
                <Image
                    className="rounded-full object-cover"
                    src="/images/noavatar.png"
                    alt="Avatar"
                    width="50"
                    height="50"
                />
                <div className="flex flex-col">
                    <span className="font-medium text-[#12994A]">
                        Peter Mwaura
                    </span>
                    <span className="text-xs text-gray-600">Admin</span>
                </div>
            </div>
            <ul>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className="font-bold text-[13px] my-2.5 text-[#12994A]">
                            {cat.title}
                        </span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className="p-5 my-[5px] flex items-center gap-2.5 cursor-pointer rounded-[10px] bg-none border-none w-full hover:bg-[#12994A]">
                <MdLogout /> Logout
            </button>
        </div>
    );
};

export default Sidebar;
