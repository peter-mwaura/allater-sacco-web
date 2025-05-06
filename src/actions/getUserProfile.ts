'use server';

import { cookies } from 'next/headers';
import axios from 'axios';

export const getUserProfile = async () => {
    const token = (await cookies()).get('accessToken')?.value;

    if (!token) return null;

    try {
        const response = await axios.get(
            'https://allater-sacco-backend.onrender.com/user/me'
            // {
            //     withCredentials: true, // If using cookies
            // }
        );

        return response.data;
    } catch (error) {
        console.error('Failed to fetch user profile:', error);
        return null;
    }
};
