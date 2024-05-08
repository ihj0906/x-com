'use client';

import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
    children: React.ReactNode;
};

function RQProvider({ children }: Props) {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    // 다른 탭 갔다가 돌아올 경우 데이터 가져오기
                    refetchOnWindowFocus: false,
                    // 컴포넌트가 unmount 됐다가 다시 mount 된 경우 데이터 가져오기
                    retryOnMount: true,
                    // 인터넷 연결이 끊겼다가 다시 접속이 되는 순간 데이터 가져오기
                    refetchOnReconnect: false,
                    // 데이터를 가져오다 실패했을 경우 재시도
                    retry: false,
                },
            },
        })
    );

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools
                initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
            />
        </QueryClientProvider>
    );
}

export default RQProvider;
