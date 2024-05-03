import Post from '@/app/(afterLogin)/_component/Post';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import style from './home.module.css';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from '@tanstack/react-query';
// import { revalidatePath, revalidateTag } from 'next/cache';

async function getPostRecommends() {
    const res = await fetch('http://localhost:9090/api/postRecommends', {
        next: {
            tags: ['posts', 'recommends'],
        },
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

export default async function Page() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['posts', 'recommends'],
        queryFn: getPostRecommends,
    });
    const dehydratedState = dehydrate(queryClient);

    // queryClient.getQueriesData(['posts', 'recommends']);

    return (
        <main className={style.main}>
            <HydrationBoundary state={dehydratedState}>
                <TabProvider>
                    <Tab />
                    <PostForm />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </TabProvider>
            </HydrationBoundary>
        </main>
    );
}

/**
 *  Provider 내부에서만 Context 를 사용할 수 있음
 */
