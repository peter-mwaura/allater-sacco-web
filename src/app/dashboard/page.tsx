import Card from '@/components/dashboard/card/card';
import Chart from '@/components/dashboard/chart/chart';
import Rightbar from '@/components/dashboard/rightbar/rightbar';
import Transactions from '@/components/dashboard/transactions/transactions';

const Dashboard = () => {
    return (
        <div className="flex gap-5 mt-5">
            <div className="flex-3 flex flex-col gap-5">
                <div className="flex gap-5 justify-between">
                    <Card title={'Users'} />
                    <Card title={'Savings'} />
                    <Card title={'Shares'} />
                    <Card title={'Loans'} />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className="flex-1">
                <Rightbar />
            </div>
        </div>
    );
};

export default Dashboard;
