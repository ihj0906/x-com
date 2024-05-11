import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import TabDeciderSuspense from './_component/TabDeciderSuspense';
import { Suspense } from 'react';
import Loading from './loading';
// import { revalidatePath, revalidateTag } from 'next/cache';

// ssr 과 로딩 기능은 함께 사용할 수 없음
export default async function Home() {
    return (
        <TabProvider>
            <Tab />
            <PostForm />
            {/* 로딩이 실제로 필요한 부분만 분리 */}
            <Suspense fallback={<Loading />}>
                <TabDeciderSuspense />
            </Suspense>
        </TabProvider>
    );
}

/**
 *  Provider 내부에서만 Context 를 사용할 수 있음
 */

// 1. page.tsx -> loading.tsx
// 2. 서버Suspense -> fallback
// 3. react-query -> isPending
