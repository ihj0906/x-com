import style from './home.module.css';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import TabDeciderSuspense from './_component/TabDeciderSuspense';
import { Suspense } from 'react';
import Loading from './loading';
import { auth } from '@/auth';
import { Metadata } from 'next';
// import { revalidatePath, revalidateTag } from 'next/cache';

export const metadata: Metadata = {
    title: '홈 / Z',
    description: '홈',
};

// ssr 과 로딩 기능은 함께 사용할 수 없음
export default async function Home() {
    const session = await auth();
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm me={session} />
                {/* 로딩이 실제로 필요한 부분만 분리 */}
                <Suspense fallback={<Loading />}>
                    <TabDeciderSuspense />
                </Suspense>
            </TabProvider>
        </main>
    );
}

/**
 *  Provider 내부에서만 Context 를 사용할 수 있음
 */

// 1. page.tsx -> loading.tsx
// 2. 서버Suspense -> fallback
// 3. react-query -> isPending
