'use client';

import { useQuery } from '@tanstack/react-query';
import { getPostRecommends } from '../_lib/getPostRecommends';
import Post from '../../_component/Post';
import { Post as IPost } from '@/model/Post';
import { Fragment } from 'react';

export default function PostRecommends() {
    const { data } = useQuery<IPost[]>({
        queryKey: ['posts', 'recommends'],
        queryFn: getPostRecommends,
        staleTime: 60 * 1000, // fresh -> stale 단위는 밀리세컨드
        gcTime: 300 * 1000, // 기본 단위는 5분
    });

    console.log('data >>>> ', data);

    return data?.map((post, i) => {
        return <Post key={post.postId} post={post} />;
    });
}
