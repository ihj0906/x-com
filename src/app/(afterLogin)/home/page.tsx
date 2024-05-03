import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import style from './home.module.css';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from '@tanstack/react-query';
import { getPostRecommends } from './_lib/getPostRecommends';
import PostRecommends from './_component/PostRecommends';
// import { revalidatePath, revalidateTag } from 'next/cache';

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
                    <PostRecommends />
                </TabProvider>
            </HydrationBoundary>
        </main>
    );
}

/**
 *  Provider 내부에서만 Context 를 사용할 수 있음
 */
