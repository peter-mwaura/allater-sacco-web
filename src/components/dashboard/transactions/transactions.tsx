import Image from 'next/image';

const Transactions = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="mb-5 text-xl font-semibold text-[#12994A]">
                Latest Transactions
            </h2>
            <table className="w-full text-sm text-gray-700">
                <thead>
                    <tr className="text-left border-b border-gray-200">
                        <th className="p-2.5">Name</th>
                        <th className="p-2.5">Status</th>
                        <th className="p-2.5">Date</th>
                        <th className="p-2.5">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="p-2.5">
                            <div className="flex items-center gap-2.5">
                                <Image
                                    className="rounded-full object-cover"
                                    src="/images/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                Peter Mwaura
                            </div>
                        </td>
                        <td className="p-2.5">
                            <span className="bg-yellow-300/50 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-md">
                                Pending
                            </span>
                        </td>
                        <td className="p-2.5">14.02.2025</td>
                        <td className="p-2.5">Kshs3000</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2.5">
                            <div className="flex items-center gap-2.5">
                                <Image
                                    className="rounded-full object-cover"
                                    src="/images/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                Peter Mwaura
                            </div>
                        </td>
                        <td className="p-2.5">
                            <span className="bg-blue-200/50 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                                Done
                            </span>
                        </td>
                        <td className="p-2.5">14.02.2025</td>
                        <td className="p-2.5">Kshs3000</td>
                    </tr>
                    <tr>
                        <td className="p-2.5">
                            <div className="flex items-center gap-2.5">
                                <Image
                                    className="rounded-full object-cover"
                                    src="/images/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                Peter Mwaura
                            </div>
                        </td>
                        <td className="p-2.5">
                            <span className="bg-red-300/50 text-red-800 text-xs font-medium px-2.5 py-1 rounded-md">
                                Cancelled
                            </span>
                        </td>
                        <td className="p-2.5">14.02.2025</td>
                        <td className="p-2.5">Kshs3000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
