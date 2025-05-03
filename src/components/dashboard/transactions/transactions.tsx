import Image from 'next/image';
import moment from 'moment';

type Status = 'PENDING' | 'SUCCESS' | 'FAILED';

const statusColorMap: Record<Status, string> = {
    PENDING: 'bg-yellow-300/50 text-yellow-800',
    SUCCESS: 'bg-blue-200/50 text-blue-800',
    FAILED: 'bg-red-300/50 text-red-800',
};

interface User {
    fullname?: string;
    profilePic?: string;
}

interface Savings {
    user?: User;
}

interface Transaction {
    id: string;
    savings?: Savings;
    type: String;
    status: Status;
    createdAt: string;
    amount: number;
}

interface TransactionsProps {
    data: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="mb-5 text-xl font-semibold text-[#12994A]">
                Latest Transactions
            </h2>
            <table className="w-full text-sm text-gray-700">
                <thead>
                    <tr className="text-left border-b border-gray-200">
                        <th className="p-2.5">Name</th>
                        <th className="p-2.5">TransactionType</th>
                        <th className="p-2.5">Status</th>
                        <th className="p-2.5">Date</th>
                        <th className="p-2.5">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((tx) => {
                        const user = tx.savings?.user;
                        const name = user?.fullname || 'Unknown';
                        const avatar =
                            user?.profilePic || '/images/noavatar.png';
                        const status = tx.status;
                        const statusColor =
                            statusColorMap[status] ||
                            'bg-gray-200 text-gray-700';

                        return (
                            <tr key={tx.id} className="border-b">
                                <td className="p-2.5">
                                    <div className="flex items-center gap-2.5">
                                        <Image
                                            className="rounded-full object-cover"
                                            src={avatar}
                                            alt={name}
                                            width={40}
                                            height={40}
                                        />
                                        {name}
                                    </div>
                                </td>
                                <td className="p-2.5">
                                    <span className="text-sm font-medium text-gray-800">
                                        {tx.type === 'DEPOSIT'
                                            ? 'Deposit'
                                            : 'Withdrawal'}
                                    </span>
                                </td>
                                <td className="p-2.5">
                                    <span
                                        className={`${statusColor} text-xs font-medium px-2.5 py-1 rounded-md`}
                                    >
                                        {status.charAt(0).toUpperCase() +
                                            status.slice(1).toLowerCase()}
                                    </span>
                                </td>
                                <td className="p-2.5">
                                    {moment(tx.createdAt).format('DD.MM.YYYY')}
                                </td>
                                <td className="p-2.5">Kshs{tx.amount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
