import { Post } from '@/model/Post';
import { QueryFunction } from '@tanstack/react-query';

export const getUserPosts: QueryFunction<
    Post[],
    [_1: string, _2: string, string]
> = async ({ queryKey }) => {
    const [_1, _2, username] = queryKey;
    const res = await fetch(
        `http://localhost:9090/api/users/${username}/posts`,
        {
            next: {
                tags: ['posts', 'users', username],
            },
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
};
