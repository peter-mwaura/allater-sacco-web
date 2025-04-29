interface ViewUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user?: {
        fullname: string;
        phonenumber: string;
        email: string;
        idnumber: string;
        role: string;
        profilePic?: string | null;
        createdAt: string;
    } | null;
}

import { motion, AnimatePresence } from 'framer-motion';

const ViewUserModal = ({ isOpen, onClose, user }: ViewUserModalProps) => {
    if (!user) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Background Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black bg-opacity-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Card */}
                    <motion.div
                        className="relative bg-white p-8 rounded-xl shadow-2xl w-[90%] max-w-2xl"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
                            User Profile
                        </h2>

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Profile Picture */}
                            <div className="flex-shrink-0">
                                <img
                                    src={
                                        user.profilePic ||
                                        '/images/noavatar.png'
                                    }
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
                                />
                            </div>

                            {/* User Info */}
                            <div className="flex-1 space-y-3 text-gray-700">
                                <div>
                                    <span className="font-semibold">
                                        Full Name:{' '}
                                    </span>
                                    {user.fullname}
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Phone Number:{' '}
                                    </span>
                                    {user.phonenumber}
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Email:{' '}
                                    </span>
                                    {user.email}
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        National ID:{' '}
                                    </span>
                                    {user.idnumber}
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Role:{' '}
                                    </span>
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${
                                            user.role === 'ADMIN'
                                                ? 'bg-red-200 text-red-700'
                                                : 'bg-green-200 text-green-700'
                                        }`}
                                    >
                                        {user.role}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Created At:{' '}
                                    </span>
                                    {new Date(
                                        user.createdAt
                                    ).toLocaleDateString()}
                                </div>
                            </div>
                        </div>

                        {/* Close Button */}
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white transition cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ViewUserModal;
