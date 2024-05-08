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
import TabDecider from './_component/TabDecider';
// import { revalidatePath, revalidateTag } from 'next/cache';

export default async function Home() {
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
                    <TabDecider />
                </TabProvider>
            </HydrationBoundary>
        </main>
    );
}

/**
 *  Provider 내부에서만 Context 를 사용할 수 있음
 */
