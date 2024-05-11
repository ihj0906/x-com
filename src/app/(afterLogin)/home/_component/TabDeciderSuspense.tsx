import TabDecider from './TabDecider';
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from '@tanstack/react-query';
import { getPostRecommends } from '../_lib/getPostRecommends';

export default async function TabDeciderSuspense() {
    const queryClient = new QueryClient();
    // 서버쪽에서 인피니트 휠 사용 시 prefetchInfiniteQuery
    await queryClient.prefetchInfiniteQuery({
        queryKey: ['posts', 'recommends'],
        queryFn: getPostRecommends,
        initialPageParam: 0, // cursor 값
    });
    const dehydratedState = dehydrate(queryClient);

    // queryClient.getQueriesData(['posts', 'recommends']);

    return (
        <HydrationBoundary state={dehydratedState}>
            <TabDecider />
        </HydrationBoundary>
    );
}
