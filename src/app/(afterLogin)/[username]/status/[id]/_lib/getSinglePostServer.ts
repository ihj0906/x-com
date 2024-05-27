import { cookies } from 'next/headers';

export const getSinglePostServer = async ({
    queryKey,
}: {
    queryKey: [string, string];
}) => {
    const [_1, id] = queryKey;
    const res = await fetch(`${process.env.PUBLIC_BASE_URL}/api/posts/${id}`, {
        next: {
            // revalidate: 3600, // 3600 = 1시간 동안 계속 같은 값을 가져옴
            tags: ['posts', id], // revalidateTag()
        },
        credentials: 'include',
        headers: { Cookie: cookies().toString() },
        // cache: 'no-store', // 데이터를 계속 새로 가져오도록 캐시에 저장하지 않음
    });

    // revalidateTag('posts'); // on demand
    // revalidatePath('/home') // 내가 보고 있는 페이지의 캐시를 날림

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    // 페이지 전체의 데이터를 새로고침
    // revalidatePath('/home');

    // 서버에 있는 캐시를 초기화함
    // revalidateTagateTag('recommends');

    return res.json();
};
