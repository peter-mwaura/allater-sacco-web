import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfirmDeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    user?: {
        fullname: string;
    } | null;
}

const ConfirmDeleteModal = ({
    isOpen,
    onClose,
    onConfirm,
    user,
}: ConfirmDeleteModalProps) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Background Overlay */}
                <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />

                {/* Modal Card */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 30 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="relative bg-white p-8 rounded-xl shadow-2xl w-[90%] max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                        Confirm Deletion
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Are you sure you want to delete{' '}
                        <span className="font-bold">{user?.fullname}</span>?{' '}
                        <br />
                        <span className="text-sm text-gray-500">
                            This action cannot be undone.
                        </span>
                    </p>

                    <div className="flex justify-center gap-4">
                        <Button
                            onClick={onClose}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-full cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={onConfirm}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full cursor-pointer"
                        >
                            Delete
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ConfirmDeleteModal;
