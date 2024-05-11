'use client';

import {
    InfiniteData,
    useInfiniteQuery,
    useSuspenseInfiniteQuery,
} from '@tanstack/react-query';
import { getPostRecommends } from '../_lib/getPostRecommends';
import Post from '../../_component/Post';
import { Post as IPost } from '@/model/Post';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // 인피니트 스크롤 사용 시

export default function PostRecommends() {
    // 인피니트 스크롤 사용 시 useInfiniteQuery
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching, // 데이터를 가져오는 순간(가져올 때마다) true
        // isPending,
        // isLoading, // isPending && isFetching
        // isError,
    } = useSuspenseInfiniteQuery<
        IPost[],
        Object,
        InfiniteData<IPost[]>,
        [_1: string, _2: string],
        number
    >({
        queryKey: ['posts', 'recommends'],
        queryFn: getPostRecommends,
        initialPageParam: 0,
        getNextPageParam: lastPage => lastPage.at(-1)?.postId, //
        staleTime: 60 * 1000, // fresh -> stale 단위는 밀리세컨드
        gcTime: 300 * 1000, // 기본 단위는 5분
    });
    const { ref, inView } = useInView({
        threshold: 0,
        delay: 0,
    });

    // 스크롤을 내려 아래 div 태그가 화면에 보여질 경우 이벤트 실행
    useEffect(() => {
        if (inView) {
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, !isFetching, hasNextPage, fetchNextPage]);

    // if (isPending) {
    //     return (
    //         <div style={{ display: 'flex', justifyContent: 'center' }}>
    //             <svg
    //                 className={styles.loader}
    //                 height="100%"
    //                 viewBox="0 0 32 32"
    //                 width={40}
    //             >
    //                 <circle
    //                     cx="16"
    //                     cy="16"
    //                     fill="none"
    //                     r="14"
    //                     strokeWidth="4"
    //                     style={{ stroke: 'rgb(29, 155, 240)', opacity: 0.2 }}
    //                 ></circle>
    //                 <circle
    //                     cx="16"
    //                     cy="16"
    //                     fill="none"
    //                     r="14"
    //                     strokeWidth="4"
    //                     style={{
    //                         stroke: 'rgb(29, 155, 240)',
    //                         strokeDasharray: 80,
    //                         strokeDashoffset: 60,
    //                     }}
    //                 ></circle>
    //             </svg>
    //         </div>
    //     );
    // }

    // if (isError) {
    //     return '에러 처리 부분';
    // }

    return (
        <>
            {data?.pages.map((page, i) => (
                <Fragment key={i}>
                    {page.map(post => (
                        <Post key={post.postId} post={post} />
                    ))}
                </Fragment>
            ))}
            {/* 스크롤을 내려 아래 div 태그가 화면에 보여질 경우 이벤트 실행  */}
            <div ref={ref} style={{ height: 50 }} />
        </>
    );
}
