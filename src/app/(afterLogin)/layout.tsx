import { ReactNode } from 'react';

export default function AfterLoginLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div>
            애프터 로그인 로그아웃
            {children}
        </div>
    );
}
