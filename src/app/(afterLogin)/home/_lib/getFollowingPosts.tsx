export async function getFollowingPosts() {
    const res = await fetch(`http://localhost:9090/api/posts/following`, {
        next: {
            tags: ['posts', 'followings'],
        },
        credentials: 'include',
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    // 페이지 전체의 데이터를 새로고침
    // revalidatePath('/home');

    // 서버에 있는 캐시를 초기화함
    // revalidateTagateTag('recommends');

    return res.json();
}
