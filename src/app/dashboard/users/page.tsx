import Pagination from '@/components/dashboard/pagination/pagination';
import Search from '@/components/dashboard/search/search';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const UsersPage = () => {
    return (
        <div className="bg-[#F9FAFB] p-5 rounded-[10px] mt-5 shadow-lg">
            <div className="flex items-center justify-between mb-5">
                <Search placeholder="Search for a user" />
                <Link href="/dashboard/users/add">
                    <Button className="p-2.5 bg-[#12994A] text-white border-none rounded-[5px] cursor-pointer hover:bg-[#1BB85A] transition-colors duration-300 text-sm">
                        Add New
                    </Button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-[10px] shadow-lg text-sm">
                    <thead className="bg-[#12994A] text-white text-left text-sm font-medium">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Phonenumber</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">National ID</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Created At</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* First Row - Admin */}
                        <tr className="hover:bg-[#f0fdf4] border-b border-gray-200">
                            <td className="p-3">
                                <div className="flex gap-2.5 items-center">
                                    <Image
                                        src="/images/noavatar.png"
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    Peter Mwaura
                                </div>
                            </td>
                            <td className="p-3">0704391679</td>
                            <td className="p-3">peterkaranjagitz@gmail.com</td>
                            <td className="p-3">33133307</td>
                            <td className="p-3">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-md">
                                    Admin
                                </span>
                            </td>
                            <td className="p-3">20.04.2025</td>
                            <td className="p-3">
                                <div className="flex gap-2.5">
                                    <Link href="/">
                                        <Button className="py-1 px-3 text-xs bg-[#12994A] hover:bg-[#1BB85A] text-white rounded-[5px] transition">
                                            View
                                        </Button>
                                    </Link>
                                    <Button className="py-1 px-3 text-xs bg-red-500 hover:bg-red-600 text-white rounded-[5px] transition">
                                        Delete
                                    </Button>
                                </div>
                            </td>
                        </tr>

                        {/* Second Row - Member */}
                        <tr className="hover:bg-[#f0fdf4] border-b border-gray-200">
                            <td className="p-3">
                                <div className="flex gap-2.5 items-center">
                                    <Image
                                        src="/images/noavatar.png"
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    Jane Doe
                                </div>
                            </td>
                            <td className="p-3">0712345678</td>
                            <td className="p-3">janedoe@example.com</td>
                            <td className="p-3">12345678</td>
                            <td className="p-3">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-md">
                                    Member
                                </span>
                            </td>
                            <td className="p-3">22.04.2025</td>
                            <td className="p-3">
                                <div className="flex gap-2.5">
                                    <Link href="/">
                                        <Button className="py-1 px-3 text-xs bg-[#12994A] hover:bg-[#1BB85A] text-white rounded-[5px] transition">
                                            View
                                        </Button>
                                    </Link>
                                    <Button className="py-1 px-3 text-xs bg-red-500 hover:bg-red-600 text-white rounded-[5px] transition">
                                        Delete
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-5">
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
