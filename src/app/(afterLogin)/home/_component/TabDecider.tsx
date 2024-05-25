'use client';

import { useContext } from 'react';
import FollowingPosts from './FollowingPosts';
import PostRecommends from './PostRecommends';
import { TabContext } from './TabProvider';

export default function TabDecider() {
    const { tab } = useContext(TabContext);
    // const { tab } = use(TabContext);

    console.log('tab >> ', tab);

    if (tab === 'rec') {
        // use를 사용한다면 if문 안에 넣어서 처리할 수 있음
        // const { tab } = use(TabContext);
        return <PostRecommends />;
    }
    if (tab === 'fol') {
        return <FollowingPosts />;
    }
}
