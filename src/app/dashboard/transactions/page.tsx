'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchTransactions = async () => {
        try {
            const res = await axios.get(
                `https://allater-sacco-backend.onrender.com/transactions?page=${page}&limit=6&search=${search}`
            );
            setTransactions(res.data.transactions);
            setTotalPages(res.data.totalPages);
        } catch (err) {
            console.error('Error fetching transactions:', err);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, [page, search]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1); // Reset to first page on new search
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4 text-[#12994A]">
                All Transactions
            </h1>

            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search by name or phone number"
                className="mb-6 px-4 py-2 border rounded-md w-full sm:max-w-md"
            />

            {/* <table className="w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-100 border-b">
                    <tr>
                        <th className="p-3">Name</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Type</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((tx: any) => (
                            <tr
                                key={tx.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="p-3 flex items-center gap-3">
                                    <Image
                                        src={
                                            tx.savings?.user?.profilePic ||
                                            '/images/noavatar.png'
                                        }
                                        alt="profile"
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    {tx.savings?.user?.fullname || 'N/A'}
                                </td>
                                <td className="p-3">{tx.phoneNumber}</td>
                                <td className="p-3">{tx.type}</td>
                                <td className="p-3">
                                    <span
                                        className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                                            tx.status === 'SUCCESS'
                                                ? 'bg-blue-200/50 text-blue-800'
                                                : tx.status === 'PENDING'
                                                ? 'bg-yellow-300/50 text-yellow-800'
                                                : 'bg-red-300/50 text-red-800'
                                        }`}
                                    >
                                        {tx.status}
                                    </span>
                                </td>
                                <td className="p-3">Kshs{tx.amount}</td>
                                <td className="p-3">
                                    {new Date(
                                        tx.createdAt
                                    ).toLocaleDateString()}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center p-4">
                                No transactions found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table> */}

            {/* Table view for desktop */}
            <table className="w-full text-sm text-left text-gray-700 hidden md:table">
                <thead className="bg-gray-100 border-b">
                    <tr>
                        <th className="p-3">Name</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Type</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((tx: any) => (
                            <tr
                                key={tx.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="p-3 flex items-center gap-3">
                                    <Image
                                        src={
                                            tx.savings?.user?.profilePic ||
                                            '/images/noavatar.png'
                                        }
                                        alt="profile"
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    {tx.savings?.user?.fullname || 'N/A'}
                                </td>
                                <td className="p-3">{tx.phoneNumber}</td>
                                <td className="p-3">{tx.type}</td>
                                <td className="p-3">
                                    <span
                                        className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                                            tx.status === 'SUCCESS'
                                                ? 'bg-blue-200/50 text-blue-800'
                                                : tx.status === 'PENDING'
                                                ? 'bg-yellow-300/50 text-yellow-800'
                                                : 'bg-red-300/50 text-red-800'
                                        }`}
                                    >
                                        {tx.status}
                                    </span>
                                </td>
                                <td className="p-3">Kshs{tx.amount}</td>
                                <td className="p-3">
                                    {new Date(
                                        tx.createdAt
                                    ).toLocaleDateString()}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center p-4">
                                No transactions found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Card view for mobile */}
            <div className="md:hidden space-y-4">
                {transactions.length > 0 ? (
                    transactions.map((tx: any) => (
                        <div
                            key={tx.id}
                            className="p-4 border rounded-lg shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Image
                                    src={
                                        tx.savings?.user?.profilePic ||
                                        '/images/noavatar.png'
                                    }
                                    alt="profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                <div className="font-semibold">
                                    {tx.savings?.user?.fullname || 'N/A'}
                                </div>
                            </div>
                            <div className="text-sm text-gray-700">
                                <p>
                                    <span className="font-medium">Phone:</span>{' '}
                                    {tx.phoneNumber}
                                </p>
                                <p>
                                    <span className="font-medium">Type:</span>{' '}
                                    {tx.type}
                                </p>
                                <p>
                                    <span className="font-medium">Status:</span>{' '}
                                    <span
                                        className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                                            tx.status === 'SUCCESS'
                                                ? 'bg-blue-200/50 text-blue-800'
                                                : tx.status === 'PENDING'
                                                ? 'bg-yellow-300/50 text-yellow-800'
                                                : 'bg-red-300/50 text-red-800'
                                        }`}
                                    >
                                        {tx.status}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-medium">Amount:</span>{' '}
                                    Kshs{tx.amount}
                                </p>
                                <p>
                                    <span className="font-medium">Date:</span>{' '}
                                    {new Date(
                                        tx.createdAt
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-sm text-gray-600">
                        No transactions found.
                    </p>
                )}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="py-[5px] px-[15px] bg-gray-200 hover:bg-gray-300 text-[#2e374a] rounded-[5px] transition cursor-pointer disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="text-sm">
                    Page {page} of {totalPages}
                </span>

                <button
                    onClick={() =>
                        setPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={page === totalPages}
                    className="py-[5px] px-[15px] bg-[#12994A] hover:bg-[#1BB85A] text-white rounded-[5px] transition cursor-pointer disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TransactionsPage;
