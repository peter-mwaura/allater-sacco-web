'use server';

import { z } from 'zod';
import axios from 'axios';
import { cookies } from 'next/headers';

const schema = z.object({
    phonenumber: z
        .string()
        .min(10, { message: 'Phonenumber must be at least 10 characters' }),
    password: z
        .string()
        .min(4, { message: 'Password must be at least 4 characters' }),
});

export async function loginUserAction(formData: FormData) {
    const validatedLoginFields = schema.safeParse({
        phonenumber: formData.get('phonenumber'),
        password: formData.get('password'),
    });

    if (!validatedLoginFields.success) {
        return {
            error: validatedLoginFields.error.errors[0].message,
            status: 400,
        };
    }

    const { phonenumber, password } = validatedLoginFields.data;

    try {
        const response = await axios.post(
            'https://allater-sacco-backend.onrender.com/auth/login',
            { phonenumber, password }
        );
        const { accessToken } = response.data;

        // Set cookie
        (await cookies()).set('accessToken', accessToken, {
            httpOnly: true, // JavaScript cannot access the token
            secure: true, // Cookie is only sent over HTTPS
            sameSite: 'strict', // Prevents CSRF attacks (only this site can send the cookie)
            maxAge: 7200, // User will stay logged in for 2hrs
            path: '/', // Cookie is available across the entire website/app
        });

        return {
            success: 'Welcome back!',
            status: 200,
        };
    } catch (error) {
        console.log(error, 'Registration error');
        return {
            error: 'Internal server error',
            status: 500,
        };
    }
}
