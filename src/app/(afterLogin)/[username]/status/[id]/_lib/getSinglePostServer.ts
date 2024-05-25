import { cookies } from 'next/headers';

export const getSinglePostServer = async ({
    queryKey,
}: {
    queryKey: [string, string];
}) => {
    const [_1, id] = queryKey;
    const res = await fetch(`http://localhost:9090/api/posts/${id}`, {
        next: {
            tags: ['posts', id],
        },
        credentials: 'include',
        headers: { Cookie: cookies().toString() },
        // cache: 'no-store', // 데이터를 계속 새로 가져오도록 캐시에 저장하지 않음
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    // 페이지 전체의 데이터를 새로고침
    // revalidatePath('/home');

    // 서버에 있는 캐시를 초기화함
    // revalidateTagateTag('recommends');

    return res.json();
};
