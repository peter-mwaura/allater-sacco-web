'use client';

import Card from '@/components/dashboard/card/card';
import Chart from '@/components/dashboard/chart/chart';
import Rightbar from '@/components/dashboard/rightbar/rightbar';
import Transactions from '@/components/dashboard/transactions/transactions';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthGuard } from '../hooks/useAuthGuard';

const Dashboard = () => {
    const router = useRouter();

    const isAuthenticated = useAuthGuard();

    // totalUsers, totalSavings, totalShares, totalLoans, recentTransactions
    const [summary, setSummary] = useState({
        totalUsers: 0,
        totalSavings: 0,
        totalShares: 0,
        totalLoans: 0,
        recentTransactions: [],
    });

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const res = await axios.get(
                    'https://allater-sacco-backend.onrender.com/dashboard/summary'
                );
                setSummary(res.data);
            } catch (err) {
                console.error('Failed to fetch dashboard summary', err);
            }
        };
        if (isAuthenticated) {
            fetchSummary();
        }
    }, [isAuthenticated]);

    if (isAuthenticated === null) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-600">Checking authentication...</p>
            </div>
        );
    }

    if (!isAuthenticated) return null;

    return (
        <div className="flex gap-5 mt-5">
            <div className="flex-3 flex flex-col gap-5">
                <div className="flex gap-5 justify-between">
                    <Card title={'Users'} number={summary.totalUsers} />
                    <Card title={'Savings'} number={summary.totalSavings} />
                    <Card title={'Shares'} number={summary.totalShares} />
                    <Card title={'Loans'} number={summary.totalLoans} />
                </div>
                <Transactions data={summary.recentTransactions} />
                <Chart />
            </div>
            <div className="flex-1">
                <Rightbar />
            </div>
        </div>
    );
};

export default Dashboard;
