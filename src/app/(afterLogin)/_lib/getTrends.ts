export async function getTrends() {
    const res = await fetch(
        `${process.env.PUBLIC_BASE_URL}/api/hashtags/trends`,
        {
            next: {
                tags: ['trends'],
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
