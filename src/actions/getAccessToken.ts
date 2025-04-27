'use server';

import { cookies } from 'next/headers';

export async function getAccessToken() {
    const accessToken = (await cookies()).get('accessToken');
    return accessToken?.value || null;
}
