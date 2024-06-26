export async function getFollowRecommends() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/followRecommends`,
        {
            next: {
                tags: ['users', 'followRecommends'],
            },
            credentials: 'include',
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    // 페이지 전체의 데이터를 새로고침
    // revalidatePath('/home');

    // 서버에 있는 캐시를 초기화함
    // revalidateTagateTag('recommends');

    return res.json();
}
