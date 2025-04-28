import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ConfirmDeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDeleteModal = ({
    isOpen,
    onClose,
    onConfirm,
}: ConfirmDeleteModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md"
            >
                <h2 className="text-lg font-semibold mb-4 text-gray-800">
                    Confirm Deletion
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    Are you sure you want to delete this user? This action
                    cannot be undone.
                </p>
                <div className="flex justify-end gap-3">
                    <Button
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-[5px]"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onConfirm}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-[5px]"
                    >
                        Delete
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default ConfirmDeleteModal;
