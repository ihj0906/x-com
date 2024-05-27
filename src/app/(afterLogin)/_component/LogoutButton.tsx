'use client';

import { signOut } from 'next-auth/react';
import style from './logoutButton.module.css';
import { useRouter } from 'next/navigation';
import { Session } from '@auth/core/types';
import { useQueryClient } from '@tanstack/react-query';

type Props = {
    me: Session | null;
};
export default function LogoutButton({ me }: Props) {
    const router = useRouter();
    const queryClient = useQueryClient();

    const onLogout = () => {
        // 로그아웃 시 캐시 없애기
        queryClient.invalidateQueries({
            queryKey: ['post'],
        });
        queryClient.invalidateQueries({
            queryKey: ['users'],
        });
        signOut({ redirect: false }).then(() => {
            // 백엔드 서버에서 로그아웃
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
                method: 'post',
                credentials: 'include',
            });
            router.refresh(); // 로그아웃 시 라우터 캐시 초기화
            router.replace('/');
        });
    };

    if (!me?.user) {
        return null;
    }

    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <img
                    src={me.user?.image as string}
                    alt={me.user?.email as string}
                />
            </div>
            <div className={style.logOutUserName}>
                <div>{me.user?.name}</div>
                <div>@{me.user?.email}</div>
            </div>
        </button>
    );
}
