'use client';

import Pagination from '@/components/dashboard/pagination/pagination';
import Search from '@/components/dashboard/search/search';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ConfirmDeleteModal from '@/components/common/ConfirmDeleteModal';
import ViewUserModal from '@/components/common/ViewUserModal';
import AddUserModal from '@/components/common/AddUserModal';
import { toast } from 'sonner';

interface User {
    id: string;
    fullname: string;
    phonenumber: string;
    email: string;
    idnumber: string;
    role: string;
    profilePic: string | null;
    createdAt: string;
}

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<User | null>(null);
    const [viewUser, setViewUser] = useState<User | null>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    const pageSize = 2;

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://allater-sacco-backend.onrender.com/users`,
                {
                    params: {
                        page: currentPage,
                        limit: pageSize,
                        search: search,
                    },
                }
            );
            setUsers(response.data.users);
            setCurrentPage(response.data.currentPage);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [currentPage, search]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleDeleteClick = (user: User) => {
        setUserToDelete(user);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!userToDelete) return;

        const token = localStorage.getItem('accessToken');
        if (!token) {
            toast.error('Unauthorized request: no token found.');
            return;
        }
        try {
            await axios.delete(
                `https://allater-sacco-backend.onrender.com/users/${userToDelete.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setIsModalOpen(false);
            setUserToDelete(null);
            fetchUsers(); // Refresh list
            toast.success('User deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete user.');
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setUserToDelete(null);
    };

    const handleViewClick = (user: User) => {
        setViewUser(user);
        setIsViewModalOpen(true);
    };

    const handleCloseViewModal = () => {
        setIsViewModalOpen(false);
        setViewUser(null);
    };

    return (
        <div className="bg-[#F9FAFB] p-5 rounded-[10px] mt-5 shadow-lg">
            <div className="flex items-center justify-between mb-5">
                <Search
                    placeholder="Search for a user"
                    value={search}
                    onChange={handleSearchChange}
                />

                <Button
                    onClick={() => setIsAddUserModalOpen(true)}
                    className="p-2.5 bg-[#12994A] text-white border-none rounded-[5px] cursor-pointer hover:bg-[#1BB85A] transition-colors duration-300 text-sm"
                >
                    Add New
                </Button>
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
                                                alt="User Avatar"
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
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-md">
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
                                            <Button
                                                className="py-1 px-3 text-xs bg-[#12994A] hover:bg-[#1BB85A] text-white rounded-[5px] transition cursor-pointer"
                                                onClick={() =>
                                                    handleViewClick(user)
                                                }
                                            >
                                                View
                                            </Button>

                                            <Button
                                                onClick={() =>
                                                    handleDeleteClick(user)
                                                }
                                                className="py-1 px-3 text-xs bg-red-500 hover:bg-red-600 text-white rounded-[5px] transition cursor-pointer"
                                            >
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
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>

            {/* AddUserModal Modal */}
            <AddUserModal
                isOpen={isAddUserModalOpen}
                onClose={() => setIsAddUserModalOpen(false)}
            />

            {/* ViewUserModal Modal */}
            <ViewUserModal
                isOpen={isViewModalOpen}
                onClose={handleCloseViewModal}
                user={viewUser}
            />

            {/* Confirm Delete Modal */}
            <ConfirmDeleteModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                user={userToDelete}
            />
        </div>
    );
};

export default UsersPage;
