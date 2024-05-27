import { cookies } from 'next/headers';

export const getUserServer = async ({
    queryKey,
}: {
    queryKey: [string, string];
}) => {
    const [_1, username] = queryKey;
    const res = await fetch(
        `${process.env.PUBLIC_BASE_URL}/api/users/${username}`,
        {
            next: {
                tags: ['users', username],
            },
            credentials: 'include',
            // 서버에서 쿠키를 가져오는 함수를 사용하면 use client 관련 에러가 발생하기 때문에 서버와 프론트 함수를 분리해야함
            headers: { Cookie: cookies().toString() },
            cache: 'no-store',
        }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
};
