'use client';

import Pagination from '@/components/dashboard/pagination/pagination';
import Search from '@/components/dashboard/search/search';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    id: string;
    fullname: string;
    phonenumber: string;
    email: string;
    idnumber: string;
    role: string;
    createdAt: string; // Adjust this to a Date if you're using Date objects
}

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchUsers = async (page: number, search: string) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://allater-sacco-backend.onrender.com/users`,
                {
                    params: {
                        page,
                        search,
                    },
                }
            );
            setUsers(response.data.users);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage, searchTerm);
    }, [currentPage, searchTerm]);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        setCurrentPage(1); // Reset to first page when search is changed
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    return (
        <div className="bg-[#F9FAFB] p-5 rounded-[10px] mt-5 shadow-lg">
            <div className="flex items-center justify-between mb-5">
                <Search
                    placeholder="Search for a user"
                    onSearch={handleSearch}
                />
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
                        {loading ? (
                            <tr>
                                <td colSpan={7} className="p-3 text-center">
                                    Loading...
                                </td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="hover:bg-[#f0fdf4] border-b border-gray-200"
                                >
                                    <td className="p-3">
                                        <div className="flex gap-2.5 items-center">
                                            <Image
                                                src="/images/noavatar.png"
                                                alt=""
                                                width={40}
                                                height={40}
                                                className="rounded-full object-cover"
                                            />
                                            {user.fullname}
                                        </div>
                                    </td>
                                    <td className="p-3">{user.phonenumber}</td>
                                    <td className="p-3">{user.email}</td>
                                    <td className="p-3">{user.idnumber}</td>
                                    <td className="p-3">
                                        <span
                                            className={`bg-${
                                                user.role === 'ADMIN'
                                                    ? 'green'
                                                    : 'blue'
                                            }-100 text-${
                                                user.role === 'ADMIN'
                                                    ? 'green'
                                                    : 'blue'
                                            }-800 text-xs font-medium px-2 py-1 rounded-md`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        {new Date(
                                            user.createdAt
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="p-3">
                                        <div className="flex gap-2.5">
                                            <Link
                                                href={`/dashboard/users/${user.id}`}
                                            >
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
                            ))
                        )}
                    </tbody>
                </table>

                <div className="mt-5">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                    />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
