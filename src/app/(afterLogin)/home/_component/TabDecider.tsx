'use client';

import { use } from 'react';
import FollowingPosts from './FollowingPosts';
import PostRecommends from './PostRecommends';
import { TabContext } from './TabProvider';

export default function TabDecider() {
    const { tab } = use(TabContext);
    // const { tab } = useContext(TabContext);

    if (tab === 'rec') {
        // use를 사용한다면 if문 안에 넣어서 처리할 수 있음
        // const { tab } = use(TabContext);
        return <PostRecommends />;
    }

    return <FollowingPosts />;
}
