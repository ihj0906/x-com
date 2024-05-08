'use client';

import { Hashtag } from '@/model/Hashtag';
import { useQuery } from '@tanstack/react-query';
import { getTrends } from '../../_lib/getTrends';
import Trend from '../../_component/Trend';

export default function TrendSection() {
    const { data } = useQuery<Hashtag[]>({
        queryKey: ['trends'],
        queryFn: getTrends,
        staleTime: 60 * 1000, // fresh -> stale 단위는 밀리세컨드
        gcTime: 300 * 1000, // 기본 단위는 5분
    });
    return data?.map(trend => {
        return <Trend trend={trend} key={trend.tagId} />;
    });
}
