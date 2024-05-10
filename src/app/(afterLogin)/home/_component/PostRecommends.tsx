'use client';

import {
    InfiniteData,
    useInfiniteQuery,
    useQuery,
} from '@tanstack/react-query';
import { getPostRecommends } from '../_lib/getPostRecommends';
import Post from '../../_component/Post';
import { Post as IPost } from '@/model/Post';
import { Fragment } from 'react';

export default function PostRecommends() {
    // 인피니트 스크롤 사용 시 useInfiniteQuery
    const { data } = useInfiniteQuery<
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

    return data?.pages.map((page, i) => (
        <Fragment key={i}>
            {page.map(post => (
                <Post key={post.postId} post={post} />
            ))}
        </Fragment>
    ));
}
