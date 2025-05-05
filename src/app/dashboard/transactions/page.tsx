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
                className="mb-6 px-4 py-2 border rounded-md w-full max-w-md"
            />

            <table className="w-full text-sm text-left text-gray-700">
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

            <div className="mt-6 flex justify-between items-center">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100 disabled:opacity-50"
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
                    className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TransactionsPage;
