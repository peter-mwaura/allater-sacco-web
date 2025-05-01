import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

interface AddUserModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const schema = z.object({
    fullname: z.string().min(1, { message: 'Full Name should not be empty' }),
    phonenumber: z
        .string()
        .min(10, { message: 'Phonenumber should be atleast 10 characters' }),
    email: z.string().email({ message: 'Email should be valid' }),
    idnumber: z
        .string()
        .min(8, { message: 'National ID should be 8 characters' })
        .max(8, { message: 'National ID should be 8 characters' }),
    role: z.string().min(1, { message: 'Role should not be empty' }),
});

const AddUserModal = ({ isOpen, onClose }: AddUserModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = async (data: any) => {
        data.password = '4332';
        try {
            await axios.post(
                'https://allater-sacco-backend.onrender.com/auth/signup',
                data
            );
            toast.success('User created successfully!');
            onClose();
        } catch (error) {
            toast.error('Failed to create user.');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Add New User
                        </h2>

                        <form
                            className="grid grid-cols-1 gap-4"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div>
                                <label className="block text-sm font-medium">
                                    Full Name
                                </label>
                                <input
                                    {...register('fullname')}
                                    type="text"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="John Doe"
                                />
                                {errors.fullname && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.fullname.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    Phone Number
                                </label>
                                <input
                                    {...register('phonenumber')}
                                    type="text"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="+254712345678"
                                />
                                {errors.phonenumber && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.phonenumber.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    {...register('email')}
                                    type="email"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    National ID
                                </label>
                                <input
                                    {...register('idnumber')}
                                    type="text"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="12345678"
                                />
                                {errors.idnumber && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.idnumber.message}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Role
                                </label>
                                <select
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                    {...register('role')}
                                >
                                    <option value="">Select a role</option>
                                    <option value="MEMBER">Member</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                                {errors.role && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.role.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded cursor-pointer"
                                >
                                    Add User
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AddUserModal;
