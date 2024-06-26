import { Post } from '@/model/Post';
import { QueryFunction } from '@tanstack/react-query';

export const getComments: QueryFunction<
    Post[],
    [_1: string, _2: string, _3: string]
> = async ({ queryKey }) => {
    const [_1, id] = queryKey;
    const res = await fetch(
        `${process.env.PUBLIC_BASE_URL}/api/posts/${id}/comments`,
        {
            next: {
                tags: ['posts', id, 'comments'],
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
