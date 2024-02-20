'use client';

import Main from '@/app/(beforeLogin)/_component/Main';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    // 뒤로 가기 시의 차이점 존재
    // push localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
    // router.push('i/flow/login');
    // replace localhost:3001 -> localhost:3001/i/flow/login
    router.replace('/i/flow/login');

    return <Main />;
}
