// app/actions/getUserProfile.ts
import axios from 'axios';

export const getUserProfile = async () => {
    try {
        const token = localStorage.getItem('accessToken');

        const response = await axios.get(
            'https://allater-sacco-backend.onrender.com/user/me',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Failed to fetch user profile:', error);
        return null;
    }
};
