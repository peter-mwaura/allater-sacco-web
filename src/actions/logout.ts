'use server';

import { cookies } from 'next/headers';

export async function logoutUserAction() {
    (await cookies()).delete('accessToken');
}
